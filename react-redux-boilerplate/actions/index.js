import $ from 'jquery';

import { ACTIONS } from '../constants';

export const incrementCounter = () => ({
  type: ACTIONS.INCREMENT_COUNTER,
});

export const fetchingIp = () => ({
  type: ACTIONS.FETCHING_IP,
});

export const receivedIp = (address) => ({
  type: ACTIONS.RECEIVED_IP,
  address,
});

export const fetchingIpFailed = (err) => ({
  type: ACTIONS.FETCHING_IP_FAILED,
  err,
});

// Gets an IP address and sends Redux actions at each step. This is an asynchronous action that
// depends on redux-thunk to function correctly.
export const getIpAddress = () => (dispatch) => {
  dispatch(fetchingIp());
  $.ajax({
    url: 'https://api.ipify.org',
    data: { format: 'jsonp' },
    dataType: 'jsonp',
    jsonp: 'callback',
  }).then((data) => {
    dispatch(receivedIp(data.ip));
  }).fail((err) => {
    dispatch(fetchingIpFailed(err));
  });
};
