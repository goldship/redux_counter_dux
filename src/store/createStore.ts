import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

export default () => {
  return createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));
};
