/* eslint-disable no-alert, no-console */
import { actions } from './reducer';
import { HTTPError } from '../../../shared/errors';

export function fetchQuote(dispatch) {
  dispatch(actions.fetchingQuote());
  fetch('/api/quote').then((response) => {
    if (response.status >= 200 && response.status < 400) {
      return response.json();
    }

    throw new HTTPError(response);
  }).then((json: any) => {
    dispatch(actions.receivedQuote({
      author: json.author,
      text: json.quote
    }));
  }).catch((err) => {
    dispatch(actions.fetchError(err));
  });
}

