/* @flow */

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app';
import Hello from './components/hello';



var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Hello} />
  </Route>
);

export default routes;
