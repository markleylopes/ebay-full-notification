const nodemailer = require('nodemailer');


module.exports = async function main({ to, html, subject = 'Sem assunto' }) {
  // Create a test acount for smtp  
  const testAccount = await nodemailer.createTestAccount();

  const {
    SMTP_HOST = 'smtp.ethereal.email',
    SMTP_PORT = 587,
    SMTP_USER = testAccount.user,
    SMTP_PASS = testAccount.pass,
    SMTP_SECURE,
   } = process.env;

   const smtpPort = +SMTP_PORT;
   let smtpSecure = false;

   try {
     const converted = JSON.parse(SMTP_SECURE);
     if(typeof converted === "boolean" ) smtpSecure = converted;
   } catch (error) {
    smtpSecure = false;
   }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: 'teste@teste.com',
    to,
    subject,
    html,
  });

  // eslint-disable-next-line no-console
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // eslint-disable-next-line no-console
  console.info('Message sent: %s', info.messageId);
};
