/* eslint-disable no-underscore-dangle */
import * as definitions from './definitions';

const initialState = [];
const Notification = (state = initialState, action) => ({
  [definitions.ADD_NOTIFICATION]: [...state, action.payload],
  [definitions.REMOVE_NOTIFICATION]: [...state.filter(i => i._id !== action.payload)],
  [definitions.LOAD_NOTIFICATION]: action.payload,
}[action.type] || state);

export default Notification;
