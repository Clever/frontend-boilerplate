import { Button } from 'clever-components';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from '../store/counter';

// Component
// View of the section of the page that displays a counter and a button to
// increment it.
// Presentational code only; state is passed as properties by the container,
// defined below.

require('./CounterSection.less');
export function CounterSectionView({ value, increment }) {
  return (<div className="section CounterSection">
    <h2>Counter</h2>
    <p>The current value is: <span className="CounterSection--value">{value}</span></p>
    <Button type="primary" onClick={increment} value="Increment Counter" />
  </div>);
}

CounterSectionView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

// Container
// Injects state and action dispatchers into the Component, thus decoupling the
// presentation from state management.

/**
 * The first argument to the Redux `connect` function is `mapStateToProps`.
 * It tells the React component how it can map data stored in the Redux store,
 * into the props that it expects.
 *
 * @param {*} state The current contents of the Redux store
 * @returns {*} An object whose keys are names of props the React component
 * expects (as defined in `propTypes`), and values are what should be passed
 * into those props.
 */
function mapStateToProps(state) {
  return { counterValue: state.counter.value };
}

/**
 * The second argument to the Redux `connect` function is `mapDispatchToProps`.
 * It provides the React component with props that contain functions that
 * can change the Redux store. These functions change the store by dispatching
 * actions that the Redux store listens for.
 *
 * This may look dissimilar to some examples online, because in our style of
 * redux, we usually provide functions that do the dispatching for you, so that
 * this component file can focus on the display of the component rather than
 * the mechanics of fetching data or making changes to the Redux store. For more
 * information on that, check out any of the /store/[reducer]/index.js files.
 *
 * @param {Function} dispatch A function that you can call to send actions to
 * the Redux store. When the Redux store receives an action, it decides how the
 * store should change and applies those changes.
 */
function mapDispatchToProps(dispatch) {
  return { increment: incrementCounter(dispatch) };
}

const CounterSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSectionView);

export default CounterSection;
