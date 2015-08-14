/* @flow */

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import NotFound from './components/not-found';
import Master from './components/master';
import Login from './components/login-page';
import Activities from './components/activities-page';
import Dashboard from './components/dashboard-page';
import ProfileSettings from './components/profile-settings-page';
import AppSettings from './components/app-settings-page';

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
