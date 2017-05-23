import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import RootReducer from './redux/reducers/RootReducer';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Router, BrowserRouter } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './containers/App.js';
import Home from './containers/Home.js';

import css from './assets/font/font.css';
import styles from './assets/app.css';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path="/" component={Home} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
