// View of the sample section. Presentational code only; state is passed as properties by the
// container.
import React, {PropTypes} from "react";

import {Button} from "clever-components";

const SampleSectionView = ({counterValue, incrementCounter}) => (
  <div className="section regenerate">
    <h2>Sample section</h2>
    <p>The current value is: <strong>{counterValue}</strong></p>
    <Button value="Increment Counter" type="primary" onClick={incrementCounter} />
  </div>
);

SampleSectionView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default SampleSectionView;
