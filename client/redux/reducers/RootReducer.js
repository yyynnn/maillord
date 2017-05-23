import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import formsReducer from './formsReducer';

let RootReducer = combineReducers({
  formsReducer,
  routing
});

export default RootReducer;
