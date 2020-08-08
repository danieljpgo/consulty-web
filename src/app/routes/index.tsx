import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/index';
import Teachers from '../pages/Teachers';
import Register from '../pages/Register';
import Navigation from '../common/layout/Navigation';
import Home from '../common/layout/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
      >
        <Home>
          <Landing />
        </Home>
      </Route>
      <Route>
        <Navigation>
          <Route
            exact
            path="/teachers"
          >
            <Teachers />
          </Route>
          <Route
            exact
            path="/register"
          >
            <Register />
          </Route>
        </Navigation>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
