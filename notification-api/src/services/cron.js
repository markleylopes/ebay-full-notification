const { job } = require('cron');
const notificationTask = require('./notificationTask');

const jobNotification = (time, func) => job(time, func, false, true);
module.exports = () => {
  jobNotification('1-59/5 * * * * *', notificationTask(30));
};
