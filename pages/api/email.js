// import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
  let nodemailer = require('nodemailer');
  console.log(res.body)

  const formData = {
    userName: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    github: req.body.github,
    // cv: res.body.cv
  }


  const mailData = {
    from: `${formData.userName} <${formData.email}>`,
    to: process.env.mail,
    subject: `${formData.userName + formData.surname} | Apply form`,
    // text: `${formData.userName}`,
    html: `
    <h2>${formData.userName} ${formData.surname}</h2><br>
    <div style="display: flex;">Mail: <a href="mailto:${formData.email}">${formData.email}</a></div><br>
    <div style="display:flex;"><span>Github: </span><a href="${formData.github}" target=_blank>${formData.userName} ${formData.surname}</a></div>`
    ,
    // attachemnts: [{
    //   filename: formData.cv[0].name,
    //   content: 'asdasd'
    // }]
  }

  const transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false,
    },
    port: process.env.mail_port,
    secure: true,
    host: process.env.mail_host,
    auth: {
      user: process.env.mail,
      pass: process.env.password,
    },
    logger: true,
    debug: false,
  });

  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log("[ ! ] Mail not sent. ", error);
      return res.status(500).json({ status: 500, ...error });
    }
    console.log("[ ✓ ] Mail sent sucessfully. Info: ", info);
    return res.status(200).json({ status: 200, ...info });
  });

  res.status(200).end(JSON.stringify({ messaga: 'Send Email' }))
}
