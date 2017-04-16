import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@your-gmail-adress',
    pass: '@your-password',
  }
});



export const mailOptions = (from = '',to, subject, text, html) => ({
  from,
  to,
  subject,
  text,
  html,
});



export const sendEmail = (options, cb) => {

  transporter.sendMail(options, (error, info) => {

    if(error)  console.log('error email: ', error);
    console.log(`message ${info.messageId} sent: ${info.response}`);
    smtpTransport.close();
  });
}
