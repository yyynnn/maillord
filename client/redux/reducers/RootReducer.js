import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import formsReducer from './formsReducer';

let RootReducer = combineReducers({
  formsReducer,
  routing: routerReducer
});

export default RootReducer;
