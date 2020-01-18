import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from 'store/sagas';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-enable */
const sagaMiddleware = createSagaMiddleware();

export const browserHistory = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(browserHistory),
    composeEnhancers(applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
    )),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
