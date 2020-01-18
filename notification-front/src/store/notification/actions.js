import * as definitions from 'store/notification/definitions';

export const addNotification = (notification) => ({
  type: definitions.ADD_NOTIFICATION,
  payload: notification,
});

export const removeNotification = (id) => ({
  type: definitions.REMOVE_NOTIFICATION,
  payload: id,
});

export const loadNotifications = (notifications) => ({
  type: definitions.LOAD_NOTIFICATION,
  payload: notifications,
});
