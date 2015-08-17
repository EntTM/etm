/* @flow */

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import NotFound from './pages/not-found';
import Master from './pages/master';
import Login from './pages/login';
import Activities from './pages/activities';
import Dashboard from './pages/dashboard';
import ProfileSettings from './pages/profile-settings';
import AppSettings from './pages/app-settings';

var routes = (
  <Route handler={Master} name="root" path="/">
    <Route handler={Login} name="login" />
    <Route handler={Activities} name="activities" />
    <Route handler={AppSettings} name="app-settings" />
    <Route handler={Dashboard} name="dashboard" />
    <Route handler={ProfileSettings} name="profile-settings" />

    <DefaultRoute handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
