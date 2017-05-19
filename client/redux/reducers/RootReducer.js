import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import itemClick from "./itemClick";
import localeChange from "./localeChange";
import timeOfDay from "./timeOfDay";

let RootReducer = combineReducers({
  itemClick,
  localeChange,
  timeOfDay,
  routing: routerReducer
});

export default RootReducer;
