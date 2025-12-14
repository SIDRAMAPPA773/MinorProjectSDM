// Elements
const reminderCard = document.getElementById('reminderCard');
const reminderWindow = document.getElementById('reminderWindow');
const closeReminder = document.getElementById('closeReminder');
const reminderForm = document.getElementById('reminderForm');
const activeReminderBox = document.getElementById('activeReminderBox');
const activeTimeSpan = document.getElementById('activeTime');
const clearReminderBtn = document.getElementById('clearReminder');
const reminderStatus = document.getElementById('reminderStatus');

// Backend URL
const API_URL = '/api/reminders';

// Toggle Window Logic
if (reminderCard) {
    reminderCard.addEventListener('click', () => {
        const userEmail = localStorage.getItem('user_email');
        if (userEmail) {
            window.location.href = 'user-dashboard.html';
        } else {
            window.location.href = 'user-login.html';
        }
    });
}

if (closeReminder) {
    closeReminder.addEventListener('click', () => {
        reminderWindow.classList.remove('active');
    });
}

// Windows Load - Check for Active Reminder
window.addEventListener('DOMContentLoaded', () => {
    // Request notification permission immediately
    if ("Notification" in window) {
        Notification.requestPermission();
    }

    const savedName = localStorage.getItem('patientName');
    const savedInterval = localStorage.getItem('reminderInterval');

    if (savedName && savedInterval) {
        showActiveState(savedName, savedInterval);
    }
});

// Form Submission
if (reminderForm) {
    reminderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('pName').value;
        const email = document.getElementById('pEmail').value;
        const phone = document.getElementById('pPhone').value;
        const interval = parseFloat(document.getElementById('pTime').value);

        const startTime = document.getElementById('pStartTime').value;

        if (!name || !interval || interval <= 0) {
            showStatus('Please enter valid details.', 'error');
            return;
        }

        // backend call
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    patientName: name,
                    email: email,
                    phone: phone,
                    intervalHours: interval,
                    startTime: startTime // New field
                })
            });
            console.log('Backend registered reminder');
        } catch (err) {
            console.warn('Backend not running, using local only', err);
        }

        // Save to LocalStorage
        localStorage.setItem('patientName', name);
        localStorage.setItem('reminderInterval', interval);

        // Schedule
        scheduleNotification(interval);

        showActiveState(name, interval);
        showStatus('Reminder set successfully!', 'success');
    });
}

// Schedule Notification Logic
let reminderId = null;
function scheduleNotification(intervalHours) {
    if (reminderId) clearInterval(reminderId);

    const ms = intervalHours * 60 * 60 * 1000;
    // const ms = intervalHours * 6000; // Un-comment for fast testing

    console.log(`Scheduling reminder every ${ms}ms`);

    reminderId = setInterval(() => {
        sendNotification("Time for Eye Drops!", `Hey ${localStorage.getItem('patientName')}, it's time for your medication.`);
    }, ms);
}

function sendNotification(title, body) {
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: body,
            icon: "https://cdn-icons-png.flaticon.com/512/3004/3004458.png"
        });
    } else {
        alert(`${title}\n${body}`);
    }
}

// Expose Test Function to Window
window.testNotification = async function () {
    console.log("Testing notification...");
    sendNotification("Test Reminder", "This is how your eye drop alerts will look!");

    // Log test to backend
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ patientName: "TEST_USER", intervalHours: 0 })
        });
    } catch (e) {
        console.warn("Backend unavailable for test log");
    }
}

function showActiveState(name, interval) {
    if (activeReminderBox) {
        activeReminderBox.style.display = 'block';
        activeTimeSpan.textContent = `Every ${interval} Hour(s)`;
        const btn = reminderForm.querySelector('button[type="submit"]');
        if (btn) btn.textContent = 'Update Settings';
    }
}

// Clear Reminder
if (clearReminderBtn) {
    clearReminderBtn.addEventListener('click', () => {
        localStorage.removeItem('patientName');
        localStorage.removeItem('reminderInterval');
        if (reminderId) clearInterval(reminderId);
        activeReminderBox.style.display = 'none';
        reminderForm.reset();
        reminderForm.querySelector('button[type="submit"]').textContent = 'Enable Device Alerts';
        showStatus('Reminder stopped.', 'error');

        // Notify backend of stop
        fetch(API_URL + '/stop', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ patientName: localStorage.getItem('patientName') || "Unknown" })
        }).catch(() => { });
    });
}

function showStatus(msg, type) {
    if (!reminderStatus) return;
    reminderStatus.textContent = msg;
    reminderStatus.className = `status-msg status-${type}`;
    reminderStatus.style.display = 'block';
    setTimeout(() => {
        reminderStatus.style.display = 'none';
    }, 3000);
}
