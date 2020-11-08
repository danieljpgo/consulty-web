import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from '../pages/Landing/index';
import Consultant from '../pages/Consultant';
import Register from '../pages/Register';
import Navigation from '../common/layout/Navigation';
import Home from '../common/layout/Home';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <Route key="landing" path="/" exact>
          <Home>
            <Landing />
          </Home>
        </Route>
        <Route>
          <Navigation>
            <Route key="consultant" path="/consultant" exact>
              <Consultant />
            </Route>
            <Route key="register" path="/register" exact>
              <Register />
            </Route>
          </Navigation>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
