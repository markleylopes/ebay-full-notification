const mongoose = require('mongoose');
const NotFoundError = require('../Erros/NotfoundError');
const ConflictError = require('../Erros/ConflictError');

const Notification = mongoose.model('Notification');
exports.getAll = async () => {
  const result = await Notification.find({});
  if (result.length === 0) throw new NotFoundError();
  return result;
};

exports.getByInterval = async ({ notificationInterval }) => {
  const notificationByInterval = await Notification
    .find({ notificationInterval });
  if (notificationByInterval.length === 0) throw new NotFoundError();
  return notificationByInterval;
};

exports.GetById = async ({ id }) => {
  const notificationById = await Notification.findById(id);
  if (!notificationById) throw new NotFoundError();
  return notificationById;
};

exports.create = async ({ body }) => {
  const { email = '', keywords = '' } = body;
  const notificationWithSamekeyWords = await Notification
    .findOne({ email: email.trim(), keywords: keywords.trim() });
  if (notificationWithSamekeyWords) {
    throw new ConflictError('You cannot register the same word for the same email');
  }
  const newNotificationn = Notification.create(body);

  return newNotificationn;
};

exports.updateById = async (req) => {
  const { body } = req;
  const { id } = req.params;
  const updatedNotification = await Notification
    .findByIdAndUpdate(id, body, { new: true });
  if (!updatedNotification) throw new NotFoundError();
  return updatedNotification;
};

exports.deleteById = async ({ id }) => {
  const deletedNotification = await Notification
    .findByIdAndDelete(id);
  if (!deletedNotification) throw new NotFoundError();
  return deletedNotification;
};
