// Injects state and action dispatchers into the CounterSectionView, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { incrementCounter } from '../actions';
import CounterSectionView from '../components/CounterSectionView';

function mapStateToProps(state) {
  return { counterValue: state.counter.value };
}

function mapDispatchToProps(dispatch) {
  return { incrementCounter: () => dispatch(incrementCounter()) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSectionView);
