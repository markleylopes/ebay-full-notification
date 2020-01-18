import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import NotificationReducer from 'store/notification/reducers';

const rootReducer = (history) => combineReducers({
  notification: NotificationReducer,
  router: connectRouter(history),
});

export default rootReducer;
