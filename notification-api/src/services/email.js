const nodemailer = require('nodemailer');

module.exports = async function main({ to, html, subject = 'Sem assunto' }) {
  // Create a test acount for smtp
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpSecure = process.env.SMTP_SECURE;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: smtpHost || 'smtp.ethereal.email',
    port: smtpPort || 587,
    secure: smtpSecure || false,
    auth: {
      user: smtpUser || testAccount.user,
      pass: smtpPass || testAccount.pass,
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
