const nodemailer = require("nodemailer");

const transporter = require('../Config/Transporter');


const mailOptions = {
  from: '"TraVisor Support" <travel.travisor@gmail.com>', // sender address
  to: "haider.a.moazzam@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
}


const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log('Mail sent successfully')
  } catch (err) { console.log(err); }
}

sendMail(transporter, mailOptions)

module.exports = ResetEmail;
