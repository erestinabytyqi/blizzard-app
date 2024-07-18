const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // use your email service provider
    auth: {
      user: 'erestinab@gmail.com',
      pass: 'leecrane',
    },
  });

  const mailOptions = {
    from: email,
    to: 'blizzardllc@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});