// Expresses state regarding the counter in SampleSection. Note: reducers MUST not have side
// effects, so don't update the state; return a new one.

import { ACTIONS } from '../constants';

export default (state = { fetching: false }, action) => {
  switch (action.type) {
    case ACTIONS.FETCHING_IP:
      return Object.assign({}, state, { fetching: true, address: null, fetchError: null });
    case ACTIONS.RECEIVED_IP:
      return Object.assign({}, state, { address: action.address, fetching: false });
    case ACTIONS.FETCHING_IP_FAILED:
      return Object.assign({}, state, { fetchError: action.err, fetching: false });
    default:
      return state;
  }
};
