import { createAction, handleActions } from 'redux-actions';

/**
 * Action creators: functions that return actions representing the possible
 * state transitions that can affect the application state.
 */
export const actions = {
  fetchingQuote: createAction('FETCHING_QUOTE'),
  receivedQuote: createAction('RECEIVED_QUOTE'),
  fetchError: createAction('FETCHING_QUOTE_FAILED'),
};


/**
 * Reducer
 * Defines how state related to the counter section changes as actions arrive.
 * Note: reducers MUST not have side effects, so don't update the state; return a new one.
 * The default value is this store's initial values.
 * @param state (any) Previous version of the state.
 * @param action ({type: String, payload: any}) The incoming action to respond to.
 */
export default handleActions({
  [actions.fetchingQuote]: (state) => {
    return { ...state, fetching: true, fetchError: null };
  },
  [actions.receivedQuote]: (state, action) => {
    const {text, author} = action.payload;
    return { ...state, text, author, fetching: false };
  },
  [actions.fetchError]: (state, action) => {
    return { ...state, fetchError: action.payload, fetching: false };
  },
}, {text: null, author: null, fetching: false, fetchError: null});
