import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from '../pages/Landing/index';
import Teachers from '../pages/Teachers';
import Register from '../pages/Register';
import Navigation from '../common/layout/Navigation';
import Home from '../common/layout/Home';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      // initial={false}
      exitBeforeEnter
    >
      <Switch
        location={location}
        key={location.pathname}
      >
        <Route
          exact
          path="/"
          key="landing"
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
              key="teachers"
            >
              <Teachers />
            </Route>
            <Route
              exact
              path="/register"
              key="register"
            >
              <Register />
            </Route>
          </Navigation>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
