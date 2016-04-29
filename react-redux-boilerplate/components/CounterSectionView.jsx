// View of the section of the page that displays a counter and a button to increment it.
// Presentational code only; state is passed as properties by the container.
import React, {PropTypes} from "react";

import {Button} from "clever-components";

const CounterSectionView = ({counterValue, incrementCounter}) => (
  <div className="section regenerate">
    <h2>Counter</h2>
    <p>The current value is: <strong>{counterValue}</strong></p>
    <Button value="Increment Counter" type="primary" onClick={incrementCounter} />
  </div>
);

CounterSectionView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default CounterSectionView;
