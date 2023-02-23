const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  //options is the object we are sending
  // console.log(options.email);
  // console.log(process.env.SMPT_MAIL);
  // console.log(process.env.SMPT_PASSWORD);
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    service: process.env.SMTP_SEVICE, //eg gmail
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
