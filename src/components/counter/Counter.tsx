import * as React from 'react';

type Props = {
  value: number;
  add(n: number): void;
  increment(): void;
};

export default function Counter(props: Props) {
  const { value, add, increment } = props;
  return (
    <div>
      <h1>Counter</h1>
      <p>value: {value}</p>
      <button
        onClick={() => {
          add(3);
        }}
      >
        +3
      </button>
      <button onClick={() => {
        increment()
      }}>+1</button>
    </div>
  );
}
