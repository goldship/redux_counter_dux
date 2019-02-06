import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import PromiseMiddleware from 'redux-promise';
import rootReducer from '../reducers/index';

export default () => {
  return createStore(rootReducer, applyMiddleware(loggerMiddleware, PromiseMiddleware));
};
