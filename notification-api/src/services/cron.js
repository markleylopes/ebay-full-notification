const { job } = require('cron');
const notificationTask = require('./notificationTask');

const jobNotification = (time, func) => job(time, func, false, true);
module.exports = () => {
  jobNotification('*/2 * * * *', notificationTask(2));
  jobNotification('*/10 * * * *', notificationTask(10));
  jobNotification('*/30 * * * *', notificationTask(30));
};
