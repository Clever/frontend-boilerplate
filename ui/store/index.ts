// combines all the redux reducers into a single store.

import { combineReducers } from "redux";

import counter from "./counter/reducer";
import quote from "./quote/reducer";

export default combineReducers({
  counter,
  quote,
});
