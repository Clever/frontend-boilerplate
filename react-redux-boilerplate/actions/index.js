import $ from 'jquery';

export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER',
});

export const fetchingIp = () => ({
  type: 'FETCHING_IP',
});

export const receivedIp = (address) => ({
  type: 'RECEIVED_IP',
  address,
});

export const fetchingIpFailed = (err) => ({
  type: 'FETCHING_IP_FAILED',
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
