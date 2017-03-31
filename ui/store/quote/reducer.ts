// Defines how state relating to the quote section changes as actions arrive.
// Note: reducers MUST not have side effects, so don't update the state; return a new one.
// The default value is this store's initial values.

export const actions = {
  fetchingQuote: () => ({ type: 'FETCHING_QUOTE' }),
  fetchQuote: (author, text) => ({ type: 'RECEIVED_QUOTE', author, text }),
  fetchError: (err) => ({ type: 'FETCHING_QUOTE_FAILED', err }),
};

export default function quote(state = { fetching: false }, action) {
  switch (action.type) {
    case 'FETCHING_QUOTE':
      return { ...state, fetching: true, fetchError: null };
    case 'FETCH_QUOTE':
      return { ...state, quote: action.text, author: action.author, fetching: false };
    case 'FETCHING_QUOTE_FAILED':
      return { ...state, fetchError: action.err, fetching: false };
    default:
      return state;
  }
}
