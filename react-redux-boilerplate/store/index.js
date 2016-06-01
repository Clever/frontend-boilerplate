// combines all the redux reducers into a single store. redux-thunk allows for asynchronous actions;
// see ../actions/index.js for an example.

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import counter from './counter';
import quote from './quote';

export default createStore(combineReducers({
  counter,
  quote,
}), applyMiddleware(thunkMiddleware));
