const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

// Konfiguracja SendGrid
const options = {
  auth: {
    api_key: 'SENDGRID_API_KEY', // Twój klucz API SendGrid
  },
};

const transporter = nodemailer.createTransport(sgTransport(options));

// Parsowanie danych JSON z żądania
app.use(bodyParser.json());

// Obsługa żądania wysyłania e-maila
app.post('/api/send-email', (req, res) => {
  const { email } = req.body;

  // Utwórz opcje wiadomości e-mail
  const mailOptions = {
    from: 'your_email@gmail.com', // Adres e-mail nadawcy
    to: email, // Adres e-mail odbiorcy
    subject: 'Subject of the email',
    text: 'This is the plain text content of the email.',
    html: '<p>This is the HTML content of the email.</p>',
  };

  // Wyślij wiadomość e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
      res.status(500).send({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
