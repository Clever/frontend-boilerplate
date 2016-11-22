// combines all the redux reducers into a single store.

import { combineReducers } from 'redux';

import counter from './counter';
import quote from './quote';

export default combineReducers({
  counter,
  quote,
});
