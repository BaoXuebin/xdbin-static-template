
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

import Loader from '../../components/Loader';

const Index = Loadable({
  loader: () => import('../Index'),
  loading: Loader
});

const RouteMap = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={Index} />
    </Switch>
  </React.Fragment>
);

export default RouteMap;