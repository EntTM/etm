/* @flow */

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/app';
import Hello from './components/hello';
import NotFound from './components/not-found';



var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Hello} />

    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
