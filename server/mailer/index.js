import { sendEmail, mailOptions } from './config';
import { baseDevUrl } from '../config';



export const sendEmailVerificationLink = (user, token) => {

  const link = `${baseDevUrl}/verifyemail/${token}`;

  const subject = 'Verify Email address';

  const text = `Hi ${user.username} `;

  const html = `
    <h3>Email verification</h3>
    <p>Thanks for registering , please verify your email by clicking on the verfication link below</p> <br/>
    <a href="${link}">Verfication link</a>
  `;


  const options = mailOptions('"ToShare Team" <aikidocomba@hh.com>', user.email, subject, text, html);
  sendEmail(options);
}
