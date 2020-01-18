import { all, put, takeLatest } from 'redux-saga/effects';
import * as definitions from 'store/notification/definitions';

export function* fetchAssociate(action) {
  const { payload } = action;

  try {
    yield put({ type: definitions.ADD_NOTIFICATION, payload });
  } catch (error) {
    yield put({ type: definitions.CHANGE_HELLO_REJECTED, error });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(definitions.CHANGE_HELLO, fetchAssociate),
  ]);
}
