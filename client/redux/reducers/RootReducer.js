import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import formsReducer from './formsReducer';
import fetchReducer from './fetchReducer';
import tooltipReducer from './tooltipReducer';
import modalReducer from './modalReducer';

let RootReducer = combineReducers({
  formsReducer,
  tooltipReducer,
  fetchReducer,
  modalReducer,
  routing
});

export default RootReducer;
