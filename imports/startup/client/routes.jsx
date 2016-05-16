import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from '../../ui/layouts/App';
import Tasks from '../../ui/pages/Tasks';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/dashboard" />
      <Route path="/dashboard" component={Tasks} />
    </Route>
  </Router>
);
