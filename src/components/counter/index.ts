import { State as RootState } from '../../reducers/index';
import { ActionDispatcher as CounterActionDispatcher } from '../../reducers/counter';
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
    counter: new CounterActionDispatcher(dispatch);
  }),
);

export default enhancer(Counter);
