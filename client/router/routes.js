import React from 'react';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';

import App from '../containers/App.js';
import Home from '../containers/Home.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
