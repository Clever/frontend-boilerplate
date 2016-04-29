// combines all the redux reducers into a single store. redux-thunk allows for asynchronous actions;
// see ../actions/index.js for an example.

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import counter from './counter';
import ip from './ip';

export default createStore(combineReducers({
  counter,
  ip,
}), applyMiddleware(thunkMiddleware));
