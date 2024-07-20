const nodemailer = require("nodemailer");
const resetUrl = 'http://localhost:3000/ResetPassword'
const transporter = require('../Config/Transporter');
const ejs = require('ejs');
const ResetEmailTemplate = require('../Templates/ResetEmailTemplate')

const sendMail = async (transporter, email) => {

  // const emailData = {
  //   name: 'Haider'
  // }

  // const emailTemplate = await ejs.renderFile(__dirname + '/../Templates/ResetEmailTemplate.ejs', emailData)
  const name = 'Haider';
  const emailTemplate = ResetEmailTemplate(name)

  mailOptions = {
    from: '"TraVisor Support" <travel.travisor@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Password Reset Request", // Subject line 
    html: emailTemplate // html body
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Mail sent successfully')
  } catch (err) { console.log(err); }
}

sendMail(transporter, 'haider.a.moazzam@gmail.com')

// module.exports = ResetEmail;
