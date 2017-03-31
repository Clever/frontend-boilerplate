/* eslint-disable no-alert, no-console */
import { actions } from './reducer';

export function fetchQuote(dispatch) {
  dispatch(actions.fetchingQuote());
  fetch('/quote').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }).then((response) => {
    dispatch(actions.fetchQuote(response.author, response.quote));
  }).catch((err) => {
    dispatch(actions.fetchError(err));
  });
}

