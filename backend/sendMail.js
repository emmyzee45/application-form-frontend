const nodemailer = require('nodemailer');

// Function to send a notification
module.exports = function sendNotification(application) {
    // Configure nodemailer with your email provider's details
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
    });
  
    // Email content
    const mailOptions = {
      from: `no_reply ${process.env.EMAIL_USER}`,
      to: "emmyaondohemba45@gmail.com",
      subject: `${application.job } Application`,
      text: `${application.job}`,
      attachments: [
        {
          filename: 'CV.pdf',
          content: application.CV, // Assuming application.CV contains the PDF content
          contentType: 'application/pdf'
        }
      ]
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }