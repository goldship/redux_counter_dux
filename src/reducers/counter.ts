import { Dispatch } from 'redux';

// action
const ADD = 'counter/add';
const INCREMENT = 'couter/increment';
const ASYNC_ADD = 'counter/asyncadd';
const ASYNC_FAILED = 'counter/asyncfailed';

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
  payload: {
    amount: number;
  };
};

type AsyncFailed = {
  type: typeof ASYNC_FAILED;
  payload: Error;
  error: true;
};

type Action = Add | Increment | AsyncAdd | AsyncFailed;

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

export function asyncAdd(n: number) {
  return (dispatch: Dispatch<AsyncAdd | AsyncFailed>) => {
    // dispatch("ASYNC_START")
    const p = new Promise<number>((resolve, reject) => {
      if (Math.floor(Math.random() * 2)) {
        resolve(n);
      } else {
        reject(new Error('async failed'));
      }
    });

    p.then(x => dispatch({ type: ASYNC_ADD, payload: { amount: x } })).catch((e: Error) =>
      dispatch({ type: ASYNC_FAILED, error: true, payload: e }),
    );
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
      return { ...state, value: state.value + action.payload.amount };
    case ASYNC_FAILED:
      return { ...state, value: -1 };
    default:
      return state;
  }
}
