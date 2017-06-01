import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import RootReducer from './redux/reducers/RootReducer';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes.js';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(createBrowserHistory(), store);

import css from './assets/font/font.css';
import styles from './assets/app.css';

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('app')
);
