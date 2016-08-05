// View of the section of the page that displays a counter and a button to increment it.
// Presentational code only; state is passed as properties by the container.
import { Button } from 'clever-components';
import React, { PropTypes } from 'react';

require('./CounterSection.less');
export default function CounterSectionView({ counterValue, incrementCounter }) {
  return (<div className="section CounterSection">
    <h2>Counter</h2>
    <p>The current value is: <span className="CounterSection--value">{counterValue}</span></p>
    <Button type="primary" onClick={incrementCounter} value="Increment Counter" />
  </div>);
}

CounterSectionView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};
