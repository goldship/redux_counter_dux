// action
const ADD = 'counter/add';
const INCREMENT = 'couter/increment';
const ASYNC_ADD = 'counter/async_increment';

type Add = {
  type: typeof ADD;
  payload: {
    amount: number;
  };
};

type Increment = {
  type: typeof INCREMENT;
};

type AsyncAdd = {
  type: typeof ASYNC_ADD;
  payload: Promise<{ amount: number }>;
};

type AsyncAddDone = {
  type: typeof ASYNC_ADD;
  payload: { amount: number };
  error?: boolean;
};

type Action = Add | Increment | AsyncAddDone;

// action creator
export function add(amount: number): Add {
  return {
    type: ADD,
    payload: {
      amount,
    },
  };
}

export function increment(): Increment {
  return {
    type: INCREMENT,
  };
}

export function asyncAdd(n: number): AsyncAdd {
  return {
    type: ASYNC_ADD,
    payload: new Promise((resolve, reject) => {
      // 1/2で失敗する
      if (Math.floor(Math.random() * 2) === 0) {
        reject(new Error('Faild async'));
      } else {
        setTimeout(() => {
          resolve({ amount: n });
        }, 2000);
      }
    }),
  };
}

// state
export type State = {
  value: number;
};

const initialState: State = {
  value: 0,
};

// reducer
export default function(state: State = initialState, action: Action) {
  switch (action.type) {
    case ADD:
      return { ...state, value: state.value + action.payload.amount };
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case ASYNC_ADD:
      if (action.error) {
        return { ...state, value: -1 };
      }
      return { ...state, value: state.value + action.payload.amount };

    default:
      return state;
  }
}
