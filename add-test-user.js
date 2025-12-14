const http = require('http');

const data = JSON.stringify({
    patientName: "Admin Dashboard Test",
    email: "admin.test@gmail.com",
    intervalHours: 0.5,
    phone: "5555555555"
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/reminders',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (d) => process.stdout.write(d));
});

req.on('error', (e) => {
    console.error(e);
});

req.write(data);
req.end();
