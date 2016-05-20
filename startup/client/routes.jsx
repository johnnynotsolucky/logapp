import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/layouts/App.jsx';
import Tasks from '../../ui/pages/Tasks.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Tasks} />
      <Route path="/dashboard" component={Tasks} />
    </Route>
  </Router>
);
