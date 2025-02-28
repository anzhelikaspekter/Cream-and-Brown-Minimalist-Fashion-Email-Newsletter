const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true для 465, false для 587
    auth: {
        user: "anzhelikaspekter@gmail.com", // Твой Gmail
        pass: "qcmv rpbi xsit emso", // Твой пароль (или пароль приложения)
    },
});

async function sendEmail() {
    const emailHTML = fs.readFileSync("email.html", "utf8");

    let info = await transporter.sendMail({
        from: '"Тест Gmail" <anzhelikaspekter@gmail.com>',
        to: "anzhelikaspekter@gmail.com",
        subject: "Привет! Это тестовое письмо",
        html: emailHTML, // Вставляем HTML-разметку
    });

    console.log("Email отправлен:", info.messageId);
}

sendEmail().catch(console.error);
