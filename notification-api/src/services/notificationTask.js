const mongoose = require('mongoose');
const getOnEbayAndSendEmail = require('./getOnEbay');
const sendEmail = require('./sendEmail');

const Notification = mongoose.model('Notification');

module.exports = (notificationInterval) => async () => {
  console.log('Teste');
  console.log(process.env.EBAY_APP_NAME);
  const notificationByInterval = await Notification.find({
    notificationInterval,
  });

  if (notificationByInterval.length === 0) return false;
  if (!notificationByInterval) return false;
  const notificationPromises = notificationByInterval
    .map((notification) => getOnEbayAndSendEmail(notification));

  return Promise.all(notificationPromises)
    .then((results) => {
      const sendAllEmails = results.map((emailInfo) => sendEmail(emailInfo));
      Promise.all(sendAllEmails);
    });
};
