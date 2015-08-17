/* @flow */

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import NotFound from './components/not-found';
import Master from './components/master';
import Login from './components/login-page';
import AllActivities from './components/all-activities-page';
// import CurrentActivities from './components/pages/current-activities';
// import Dashboard from './components/pages/dashboard';
// import ProfileSettings from './components/pages/profile-settings';
import AppSettings from './components/app-settings-page';

var routes = (
  <Route handler={Master} name="root" path="/">
    <Route handler={Login} name="login" />
    <Route handler={AllActivities} name="all-activities" />
    <Route handler={AppSettings} name="app-settings" />
    {/*
    <Route handler={CurrentActivities} name="current-activities" />
    <Route handler={Dashboard} name="dashboard" />
    <Route handler={ProfileSettings} name="profile-settings" />
    */}

    <DefaultRoute handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
