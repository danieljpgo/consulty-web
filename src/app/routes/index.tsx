import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/index';
import Teachers from '../pages/Teachers';
import Form from '../pages/Form';
import Navigation from '../common/layout/Navigation';
import Home from '../common/layout/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
      >
        <Home>
          <Landing />
        </Home>
      </Route>
      <Route>
        <Navigation>
          <Route
            path="/form"
            exact
          >
            <Teachers />
          </Route>
          <Route
            path="/teachers"
            exact
          >
            <Form />
          </Route>
        </Navigation>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
