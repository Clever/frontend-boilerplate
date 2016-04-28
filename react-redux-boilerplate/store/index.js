// combines all the redux reducers into a single store. Currently there's only one store, so that's
// why combineReduers only has one entry in its input. redux-thunk allows for asynchronous actions
// (think AJAX calls).

import {applyMiddleware, createStore, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";

import counter from "./counter";

export default createStore(combineReducers({
  counter,
}), applyMiddleware(thunkMiddleware));
