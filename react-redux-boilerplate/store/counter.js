// Expresses state regarding the counter in SampleSection. Note: reducers MUST not have side
// effects, so don't update the state; return a new one.

export default (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, { value: state.value + 1 });
    default:
      return state;
  }
};
