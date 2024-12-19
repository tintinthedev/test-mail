const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  secure: false
})

async function sendEmail(from, to, subject, text, html) {
  if(!from || !to || !subject || !text || !html) throw new Error("Invalid fields")
  try {
    const mailSendInfo = transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    })

    return mailSendInfo
  } catch(error) {
    throw error;
  }
}

module.exports = {
  sendEmail
}