// action
const ADD = 'counter/add';
const INCREMENT = 'couter/increment';
const ASYNC_START = 'counter/asyncstart';
const ASYNC_SUCCESS = 'counter/asyncsuccess';
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

type AsyncStart = {
  type: typeof ASYNC_START;
};

type AsyncSuccess = {
  type: typeof ASYNC_SUCCESS;
  payload: {
    amount: number;
  };
};

type AsyncFailed = {
  type: typeof ASYNC_FAILED;
  payload: Error;
  error: true;
};

type Action = Add | Increment | AsyncStart | AsyncSuccess | AsyncFailed;

// action creator
type Dispatch = (action: any) => any;
export class ActionDispatcher {
  private dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  add(amount: number): Add {
    return {
      type: ADD,
      payload: {
        amount,
      },
    };
  }

  increment(): Increment {
    return {
      type: INCREMENT,
    };
  }

  async asyncAdd(amount: number): Promise<void> {
    // this.dispatch({type: ASYNC_START})
    const p = new Promise<number>((resolve, reject) => {
      if (Math.floor(Math.random() * 2)) {
        resolve(amount);
      } else {
        reject(new Error('async failed'));
      }
    });

    try {
      const response = await p;
      this.dispatch({ type: ASYNC_SUCCESS, payload: { amount: response } });
    } catch (e) {
      this.dispatch({ type: ASYNC_FAILED, payload: e, error: true });
    }
  }
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
    case ASYNC_SUCCESS:
      return {...state, value: state.value + action.payload.amount}
    case ASYNC_FAILED:
      return {...state, value: -1}
    default:
      return state;
  }
}
