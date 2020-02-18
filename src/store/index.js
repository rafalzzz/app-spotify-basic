import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducer.js';
import { rootSaga } from './saga';

const configureStore = (initialState, services) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [composeWithDevTools(applyMiddleware(sagaMiddleware))];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  sagaMiddleware.run(rootSaga, services);

  return store;
};

export const store = configureStore();