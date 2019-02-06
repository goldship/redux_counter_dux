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
  {
    add: CounterActions.add,
    increment: CounterActions.increment,
    asyncAdd: CounterActions.asyncAdd
  },
);

export default enhancer(Counter);
