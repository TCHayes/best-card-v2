// require('dotenv').config() //for development only; otherwise use Heroku's env
const { SMTP_URL } = process.env;
const nodemailer = require('nodemailer');

const defaultEmailData = {from: 'BestCardInfo@gmail.com'};

const sendEmail = (emailData, smtpUrl=SMTP_URL) => {
  const completeEmailData = Object.assign(defaultEmailData, emailData);
  const transporter = nodemailer.createTransport(SMTP_URL);
  return transporter
    .sendMail(completeEmailData)
    .then(info => console.log(`Message sent: ${info.response}`))
    .catch(err => console.log(`Problem sending email: ${err}`));
}

module.exports = {sendEmail};
