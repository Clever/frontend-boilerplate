// Actions define what events can cause application state to change. How the application state
// actually changes is defined by each reducer in the Redux store (see the store/ directory).

import 'whatwg-fetch';

// Synchronous actions are just Javascript objects that contain a `type` and other metadata. The
// `type` allows the `store` to distinguish what action is occurring, and, if present, the Redux
// reducers can use the metadata in other fields to modify the state properly.
export function incrementCounter() {
  return { type: 'INCREMENT_COUNTER' };
}

export function fetchingQuote() {
  return { type: 'FETCHING_QUOTE' };
}

export function receivedQuote(author, quote) {
  return {
    type: 'RECEIVED_QUOTE',
    author,
    quote,
  };
}

export function fetchingQuoteFailed(err) {
  return {
    type: 'FETCHING_QUOTE_FAILED',
    err,
  };
}
