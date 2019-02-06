import * as React from 'react';

type Props = {
  value: number;
  add(n: number): void;
  increment(): void;
  asyncAdd(n: number): void;
};

export default function Counter(props: Props) {
  const { value, add, increment, asyncAdd } = props;
  return (
    <div>
      <h1>Counter</h1>
      <p>value: {value} </p>
      <button
        onClick={() => {
          add(3);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          asyncAdd(3);
        }}
      >
        Async +3
      </button>
    </div>
  );
}
