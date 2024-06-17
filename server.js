const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post('/send', (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_USER,
    subject: 'Contact Us Form Submission',
    text: `First Name: ${req.body.firstName}\nLast Name: ${req.body.lastName}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 3000; // Change to 3000 or any other port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', error);
  }
});

// Global error handler
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Mandatory (as per the Node.js docs)
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection', err);
  process.exit(1); // Optional: Depends on your requirements
});
