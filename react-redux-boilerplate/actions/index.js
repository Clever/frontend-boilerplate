import 'whatwg-fetch';

// Synchronous actions are just Javascript objects that contain a `type` and other metadata. The
// `type` allows the `store` to distinguish what action is occurring, and, if present, the Redux
// reducers can use the metadata in other fields to modify the state properly.
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
//
// Asynchronous actions are functions that can dispatch synchronous actions as they please. Hence,
// they receive `dispatch` as a parameter.
export const getIpAddress = () => (dispatch) => {
  dispatch(fetchingIp());
  fetch('/ip').then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }).then((response) => {
    dispatch(receivedIp(response.ip));
  }).catch((err) => {
    dispatch(fetchingIpFailed(err));
  });
};
