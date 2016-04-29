// Injects state and action dispatchers into the CounterSectionView, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { incrementCounter } from '../actions';
import CounterSectionView from '../components/CounterSectionView';

const mapStateToProps = (state) => ({
  counterValue: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementCounter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSectionView);
