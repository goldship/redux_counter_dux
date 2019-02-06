import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../store/createStore';
import Counter from './counter/index';

export default function() {
  return (
    <Provider store={createStore()}>
      <Counter />
    </Provider>
  );
}
