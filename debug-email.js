const nodemailer = require('nodemailer');

require('dotenv').config();

async function testEmail() {
    console.log("Testing Email...");
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use service: 'gmail' for simplicity
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        },
        debug: true,
        logger: true
    });

    try {
        const info = await transporter.sendMail({
            from: `"Debug Script" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Sending to self for test
            subject: 'Debug Test',
            text: 'If you see this, email is working.'
        });
        console.log("Email Success:", info.messageId);
    } catch (err) {
        console.error("Email Failed:", err);
    }
}

testEmail();
