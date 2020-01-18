import { all } from 'redux-saga/effects';

import notificationSagas from 'store/notification/sagas';

export default function* rootSaga() {
  yield all([
    notificationSagas(),
  ]);
}
