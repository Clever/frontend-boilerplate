import { createAction, handleActions } from 'redux-actions';

/**
 * Action creators: functions that return actions representing the possible
 * state transitions that can affect the application state.
 */
export const actions = {
  incrementCounter: createAction('INCREMENT_COUNTER'),
};

/**
 * Reducer
 * Defines how state related to the counter section changes as actions arrive.
 * Note: reducers MUST not have side effects, so don't update the state; return a new one.
 * The default value is this store's initial values.
 * @param state (any) Previous version of the state. Default value defines a default
 * initial value of the store.
 * @param action ({type: String, payload: any}) The incoming action to respond to.
 */
export default handleActions({
  // this reducer actually doesn't need the action, so the second argument
  // of the action is omitted.
  [actions.incrementCounter]: (state) => {
    return {...state, value: state.value + 1};
  },
}, {value: 0});