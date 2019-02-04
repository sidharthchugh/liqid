import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import App from './components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const element = document.getElementById('root');
console.log(element);
if (!element) {
  throw new Error("Couldn't find element with id root.")
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
