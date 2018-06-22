const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

module.exports = function sendMail(recipientAddress, subject, body) {
  let smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.E_MAIL,
    pass: process.env.PASSWORD
  }
};

let transporter = nodemailer.createTransport(smtpConfig);
let mailOptions = {
  From: '"Mediterrranean panic button" <devugees.shop@gmail.com>',
  to: recipientAddress,
  subject: subject,
  text: body,
};

transporter.sendMail(mailOptions, function(err, info) {
	console.log('this the mail info: ',info);
  if(err)
    console.log('error');
});
}