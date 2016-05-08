import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/layouts/App.jsx';

export const renderRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  );
}
