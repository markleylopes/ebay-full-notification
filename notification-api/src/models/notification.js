const mongoose = require('mongoose');
const emailValidator = require('email-validator');

const { Schema } = mongoose;

const NotificationSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (v) => emailValidator.validate(v),
      message: (props) => `Enter a ${props.value} a valid email!`,
    },
  },
  keywords: {
    type: String,
    trim: true,
    required: true,
  },
  notificationInterval: {
    type: Number,
    required: true,
    enum: [[2, 10, 30],
      'Enter one of values 2 10 30!'],
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
