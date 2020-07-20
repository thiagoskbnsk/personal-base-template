import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ControlledRoute from './ControlledRoute';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';

function Routes() {
  return (
    <Switch>
      <ControlledRoute exact path="/" component={Login} />
      <ControlledRoute path="/register" component={Register} />

      <ControlledRoute path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/page-not-found" component={() => <h1>404</h1>} />
      <Redirect to="/page-not-found" />
    </Switch>
  );
}

export default Routes;
