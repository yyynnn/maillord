import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import RootReducer from './redux/reducers/RootReducer';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';

import css from './assets/font/font.css';
import styles from './assets/app.css';

import routes from './router/routes.js';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <div>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </div>,
  document.getElementById('app')
);
