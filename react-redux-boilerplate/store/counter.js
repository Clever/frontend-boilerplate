// Expresses state regarding the counter in SampleSection. Note: reducers MUST not have side
// effects, so don't update the state; return a new one.

import { ACTIONS } from '../constants';

export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_COUNTER:
      return Object.assign({}, state, { value: state.value + 1 });
    default:
      return state;
  }
};
