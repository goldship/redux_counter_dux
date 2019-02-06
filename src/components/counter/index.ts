import { State as RootState } from '../../reducers/index';
import * as CounterActions from '../../reducers/counter';
import Counter from './Counter';
import { connect } from 'react-redux';

type OuterProps = {};

type Props = {
  value: number;
};

const mapStateToProps = (state: RootState, props: OuterProps): Props => {
  return {
    value: state.counter.value,
  };
};

const enhancer = connect(
  mapStateToProps,
  dispatch => ({
    add: (x: number) => dispatch(CounterActions.add(x)),
    increment: () => dispatch(CounterActions.increment()),
    asyncAdd: (x: number) => {
      // dispatchのreturnでPromiseが返ってくるときもあるが推論できていない
      (dispatch(CounterActions.asyncAdd(x)) as any).catch((e: Error) => console.log(e.message));
    },
  }),
);

export default enhancer(Counter);
