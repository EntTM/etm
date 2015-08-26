/* @flow */

import React from 'react';
import {Route, NotFoundRoute, Redirect} from 'react-router';
import NotFound from './pages/not-found';
import Master from './pages/master';
import Login from './pages/login';
import Projects from './pages/projects';
import AppSettings from './pages/app-settings';



var routes = (
  <Route handler={Master} name="root" path="/">
    <Route handler={Login} name="login"/>
    <Route handler={Projects} name="project"/>
    <Route handler={AppSettings} name="settings"/>

    {localStorage.loggedIn ?
      <Redirect to='project'/> :
      <Redirect to='login'/>}

    <NotFoundRoute handler={NotFound}/>
  </Route>
);


export default routes;
