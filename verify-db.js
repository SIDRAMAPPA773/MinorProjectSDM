const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sdm_eye_care')
    .then(async () => {
        console.log('Connected to DB');

        const ReminderSchema = new mongoose.Schema({
            patientName: String,
            email: String,
            phone: String,
            intervalHours: Number,
            isActive: Boolean
        });
        const Reminder = mongoose.model('Reminder', ReminderSchema);

        const count = await Reminder.countDocuments();
        console.log(`Total Reminders: ${count}`);

        const all = await Reminder.find({});
        console.log(JSON.stringify(all, null, 2));

        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
