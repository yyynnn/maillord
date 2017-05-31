import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import formsReducer from './formsReducer';
import fetchReducer from './fetchReducer';

let RootReducer = combineReducers({
  formsReducer,
  fetchReducer,
  routing
});

export default RootReducer;
