// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

const userGmail = "lucas298113@gmail.com";
const passAppGmail = "klhr hxui bovj opuu";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Define a route for sending emails
// Set up email options
const mailOptions = {
  from: `"TecniCo" <${userGmail}>`,
  to: "lucas298113@gmail.com",
  subject: "Test Contacto",
  text: "correo de prueba automatizado",
  headers: {
    "X-GM-LABELS": "Urgente",
  },
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else if (info) {
    console.log("Email sent: " + info.response);
  } else {
    console.log("Error al enviar el correo electrónico");
  }
});
