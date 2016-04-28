// Injects state and action dispatchers into the SampleSectionView, thus decoupling the presentation
// from state management.
import {connect} from "react-redux";

import {incrementCounter} from "../actions";
import SampleSectionView from "../components/SampleSectionView";

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
)(SampleSectionView);
