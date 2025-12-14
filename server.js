const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const twilio = require('twilio');
require('dotenv').config(); // Load environment variables

// SMS CONFIGURATION
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

let smsClient;
if (accountSid && authToken) {
    smsClient = new twilio(accountSid, authToken);
} else {
    console.warn("   [WARN] Twilio Credentials missing in .env. SMS will not work.");
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve HTML/CSS/JS files

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sdm_eye_care';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('   - [DB] Connected to MongoDB (sdm_eye_care)');
        restoreReminders();
    })
    .catch(err => console.error('   - [DB ERROR] MongoDB Connection Failed:', err));

// Schema Definition
const ReminderSchema = new mongoose.Schema({
    patientName: String,
    email: String,
    phone: String,
    intervalHours: Number,
    startTime: Date, // New Field
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

const Reminder = mongoose.model('Reminder', ReminderSchema);

// In-memory active intervals (map of ID -> intervalObj)
// In-memory active timers (map of ID -> { type: 'TIMEOUT'|'INTERVAL', handle: ... })
let activeTimers = {};

const clearTimer = (id) => {
    const key = String(id);
    if (activeTimers[key]) {
        if (activeTimers[key].type === 'TIMEOUT') clearTimeout(activeTimers[key].handle);
        else clearInterval(activeTimers[key].handle);
        delete activeTimers[key];
        console.log(`   [TIMER] Cleared active timer for ID: ${key}`);
        return true;
    }
    console.log(`   [TIMER] No active timer found for ID: ${key}`);
    return false;
};

// Emails
let transporter;

if (process.env.EMAIL_SERVICE === 'sendgrid') {
    transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: 'apikey', // This is literally the string 'apikey'
            pass: process.env.SENDGRID_API_KEY
        }
    });
    console.log('[SMTP] Using SendGrid Service');
} else {
    // Default to Gmail (Best Effort)
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        family: 4,
        connectionTimeout: 30000,
    });
    console.log('[SMTP] Using Gmail Service');
}

// Verify SMTP Connection on Startup
transporter.verify(function (error, success) {
    if (error) {
        console.log('[SMTP ERROR] Connection test failed:', error);
    } else {
        console.log('[SMTP] Connection established successfully!');
    }
});

// Helper Query to Send Notifications
const sendNotification = async (reminderDoc) => {
    const { patientName, email, phone, intervalHours } = reminderDoc;
    console.log(`\n[SCHEDULER] Triggering Notification for ${patientName}...`);

    const subject = 'Eye Drop Reminder';
    const text = `Hello ${patientName}, \n\nIt is time for your eye drops!\n\nThis reminder is set for every ${intervalHours} hours.\n\nStay healthy, \nSDM College of Medical Sciences & Hospital`;

    // EMAIL
    if (email) {
        try {
            await transporter.sendMail({
                from: '"SDM Eye Care" <sidramhalannavar7@gmail.com>',
                to: email,
                subject: subject,
                text: text
            });
            console.log(`   > [EMAIL SENT] To: ${email}`);
        } catch (err) {
            console.error(`   > [EMAIL ERROR] ${err.message}`);
            // THROW error to let the frontend know registration failed if this is the initial welcome email
            // But only if it's a critical failure? 
            // For now, let's throw it so the "New Reminder" modal shows "Error: Invalid Login"
            throw new Error(`Email failed: ${err.message}`);
        }
    }

    // SMS
    if (phone) {
        // Ensure E.164 format (Default to +91 for India if missing)
        let formattedPhone = phone.trim();
        if (!formattedPhone.startsWith('+')) {
            formattedPhone = '+91' + formattedPhone;
        }

        if (smsClient) {
            try {
                const msgOptions = {
                    body: `SDM Eye Care: Hello ${patientName}, Time for your eye drops!`,
                    to: formattedPhone
                };

                // Prioritize Messaging Service, fallback to From Number
                if (messagingServiceSid) {
                    msgOptions.messagingServiceSid = messagingServiceSid;
                } else if (twilioPhoneNumber) {
                    msgOptions.from = twilioPhoneNumber;
                } else {
                    console.error('   > [SMS ERROR] No MessagingServiceSid or From Number configured.');
                }

                await smsClient.messages.create(msgOptions);
                console.log(`   > [SMS SENT] To: ${formattedPhone}`);
            } catch (err) {
                console.error(`   > [SMS ERROR] ${err.message}`);
                // Don't throw for SMS, as email is primary for this user
            }
        } else {
            console.log(`   > [SMS SKIP] Twilio not configured.`);
        }
    }
};

// Scheduler Helper
// Scheduler Helper
const startReminderSchedule = (reminderDoc) => {
    // Stop any existing timer for this ID
    clearTimer(reminderDoc._id);

    const now = new Date();
    // If startTime is present, parse it. Otherwise assume immediate start.
    const start = reminderDoc.startTime ? new Date(reminderDoc.startTime) : now;

    // Calculate delay in ms
    let delay = start.getTime() - now.getTime();
    if (delay < 0) delay = 0; // If start time is in the past, start immediately

    const intervalMs = reminderDoc.intervalHours * 60 * 60 * 1000;
    // const intervalMs = reminderDoc.intervalHours * 6000; // Fast testing mode

    console.log(`   > [SCHEDULER] ${reminderDoc.patientName}: Starts in ${(delay / 1000).toFixed(1)}s, then every ${reminderDoc.intervalHours}h`);

    // Definition of the Recurring Loop
    const startLoop = () => {
        // 1. Send first notification immediately upon start
        // 1. Send first notification immediately upon start
        sendNotification(reminderDoc).catch(err => console.error(`[SCHEDULER ERROR] Initial notification failed for ${reminderDoc.patientName}: ${err.message}`));

        // 2. Start Interval
        const loopId = setInterval(() => {
            const key = String(reminderDoc._id);
            if (activeTimers[key]) {
                sendNotification(reminderDoc).catch(err => console.error(`[SCHEDULER ERROR] Loop notification failed: ${err.message}`));
            } else {
                clearInterval(loopId);
            }
        }, intervalMs);

        activeTimers[String(reminderDoc._id)] = { type: 'INTERVAL', handle: loopId };
    };

    if (delay > 0) {
        // Wait for start time
        const timeoutId = setTimeout(() => {
            startLoop();
        }, delay);
        activeTimers[String(reminderDoc._id)] = { type: 'TIMEOUT', handle: timeoutId };
    } else {
        // Start immediately
        startLoop();
    }
};

// --- API ROUTES ---

// Register New Reminder
app.post('/api/reminders', async (req, res) => {
    const { patientName, email, phone, intervalHours, startTime } = req.body;

    if (!patientName || !intervalHours) {
        return res.status(400).json({ error: 'Missing name or interval' });
    }

    try {
        // Create DB Entry
        const newReminder = new Reminder({
            patientName,
            email,
            phone,
            intervalHours,
            startTime,
            isActive: true
        });
        await newReminder.save();

        console.log(`\n[SERVER] New Recurring Reminder Registered(DB ID: ${newReminder._id}): `);
        console.log(`   - Name: ${patientName} `);
        console.log(`   - Email: ${email || 'N/A'} `);
        console.log(`   - Phone: ${phone || 'N/A'} `);
        console.log(`   - Interval: Every ${intervalHours} hours`);

        // Send Welcome Notification (Non-blocking)
        try {
            await sendNotification(newReminder);
        } catch (emailErr) {
            console.error(`   [WARNING] Welcome email failed: ${emailErr.message}. Proceeding with reminder setup.`);
        }

        // Start Timer
        startReminderSchedule(newReminder);

        res.json({
            message: 'Recurring reminder set successfully.',
            reminderId: newReminder._id,
            status: 'Active'
        });

    } catch (err) {
        console.error('Error saving reminder:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Stop Reminder
app.post('/api/reminders/stop', async (req, res) => {
    const { patientName } = req.body;

    try {
        // Find active reminders for this person
        const reminders = await Reminder.find({ patientName: patientName, isActive: true });

        if (reminders.length === 0) {
            return res.json({ message: 'No active reminders found.' });
        }

        for (const rem of reminders) {
            // Stop Timer
            if (clearTimer(rem._id)) {
                console.log(`[SERVER] Stopped Timer for: ${rem.patientName} `);
            }

            // Update DB
            // We can delete it OR mark as inactive. Let's HARD DELETE for now to keep things clean as per user request
            // await Reminder.findByIdAndUpdate(rem._id, { isActive: false });
            await Reminder.findByIdAndDelete(rem._id);
        }

        res.json({ message: `Stopped and removed ${reminders.length} reminders for ${patientName}.` });

    } catch (err) {
        console.error('Error stopping reminder:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// --- ADMIN ROUTES ---

// 1. List All Reminders
app.get('/api/admin/reminders', async (req, res) => {
    try {
        const reminders = await Reminder.find({}).sort({ createdAt: -1 });
        res.json(reminders);
    } catch (err) {
        res.status(500).json({ error: 'DB Error' });
    }
});

// 2. Toggle Status (Start/Stop)
app.put('/api/admin/reminders/:id/toggle', async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body; // true or false

        const reminder = await Reminder.findById(id);
        if (!reminder) return res.status(404).json({ error: 'Not found' });

        // Update DB
        reminder.isActive = isActive;
        await reminder.save();

        if (isActive) {
            // Start Timer
            startReminderSchedule(reminder);
            console.log(`[ADMIN] Enabled reminder for ${reminder.patientName}`);
        } else {
            // Stop Timer
            clearTimer(reminder._id);
            console.log(`[ADMIN] Disabled reminder for ${reminder.patientName}`);
        }

        res.json({ message: 'Status updated', reminder });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'DB Error' });
    }
});

// 3. User Delete/Stop Reminder
app.delete('/api/reminders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const reminder = await Reminder.findByIdAndDelete(id);

        if (reminder) {
            clearTimer(reminder._id);
        }
        console.log(`[USER] Deleted reminder ${id}`);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// 3. Delete Reminder
app.delete('/api/admin/reminders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const reminder = await Reminder.findByIdAndDelete(id);

        if (reminder) {
            clearTimer(reminder._id);
        }

        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'DB Error' });
    }
});

// 4. List All Users (New)
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'DB Error' });
    }
});

// --- USER ROUTES ---

// 1. User Register
app.post('/api/user/register', async (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) return res.status(400).json({ error: 'All fields are required' });

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'User already exists. Please Login.' });

        const newUser = new User({ name, email, phone, password });
        await newUser.save();

        console.log(`[USER] Registered: ${email} (${name})`);
        res.json({ message: 'Registration Successful', token: email, email: email, name: name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// 2. User Login
app.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing credentials' });

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found. Please Register.' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Return success
        res.json({ message: 'Success', token: email, email: email, name: user.name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// 3. User Reset Password
app.post('/api/user/reset-password', async (req, res) => {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) return res.status(400).json({ error: 'Email and New Password required' });

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User email not found.' });

        user.password = newPassword;
        await user.save();

        console.log(`[USER] Password reset for: ${email}`);
        res.json({ message: 'Password updated successfully. Please Login.' });
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// 3. Get User Reminders
app.get('/api/user/reminders', async (req, res) => {
    const { email } = req.query; // Simple auth via query param for this prototype
    if (!email) return res.status(400).json({ error: 'User email required' });

    try {
        const reminders = await Reminder.find({ email: email }).sort({ createdAt: -1 });
        res.json(reminders);
    } catch (err) {
        res.status(500).json({ error: 'DB Error' });
    }
});

// Test endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'Server is running',
        activeTimers: Object.keys(activeTimers).length,
        dbState: mongoose.connection.readyState
    });
});

// STARTUP RECOVERY
const restoreReminders = async () => {
    try {
        // Wait briefly for DB to connect
        await new Promise(r => setTimeout(r, 1000));

        const allReminders = await Reminder.find({});
        const activeReminders = allReminders.filter(r => r.isActive);

        console.log(`\n[RECOVERY] DB Scan: Total ${allReminders.length} reminders. Found ${activeReminders.length} ACTIVE.`);

        activeReminders.forEach(rem => {
            console.log(`   - Restoring schedule for: ${rem.patientName} (Interval: ${rem.intervalHours}h)`);
            startReminderSchedule(rem);
        });
        console.log(`[RECOVERY] Complete.\n`);
    } catch (err) {
        console.error('[RECOVERY ERROR]', err);
    }
}


// Debug Email Route
app.get('/api/debug/test-email', async (req, res) => {
    try {
        await transporter.sendMail({
            from: '"SDM Debug" <sidramhalannavar7@gmail.com>',
            to: 'sidramhalannavar7@gmail.com',
            subject: 'Deployment Test',
            text: 'If you received this, your email configuration is correct on the live server.'
        });
        res.json({ message: 'Email sent successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message, stack: err.stack });
    }
});

app.listen(PORT, () => {
    console.log(`================================================== `);
    console.log(`   Eye Drop Reminder Backend Running on Port ${PORT} `);
    console.log(`   - Scheduler Active.`);
    console.log(`   - Data Persistence: MongoDB`);
    console.log(`   - Sending real emails via Gmail.`);
    console.log(`   - SMS ready for credentials.`);
    console.log(`================================================== `);


});
