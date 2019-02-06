import * as React from 'react';
import { ActionDispatcher } from '../../reducers/counter';

type Props = {
  value: number;
  counter: ActionDispatcher;
};

export default function Counter(props: Props) {
  return (
    <div>
      <h1>Counter</h1>
      <p>value: {props.value}</p>
      <button
        onClick={() => {
          props.counter.add(3);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          props.counter.increment;
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.counter.asyncAdd(3);
        }}
      >
        async +3
      </button>
    </div>
  );
}
