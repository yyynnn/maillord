import React from 'react';
import { Route } from 'react-router';

import App from './containers/App.js';
import Home from './containers/Home.js';

const routes = (
  <App>
    <Route path="/" component={Home} />
  </App>
);

export default routes;
