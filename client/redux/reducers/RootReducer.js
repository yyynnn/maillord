import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import addHeading from "./addHeading";

let RootReducer = combineReducers({
  addHeading,
  routing: routerReducer
});

export default RootReducer;
