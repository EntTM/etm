/* @flow */

import React from 'react';
import {Route, NotFoundRoute, Redirect} from 'react-router';
import NotFound from './pages/not-found';
import Master from './pages/master';
import Login from './pages/login';
import Projects from './pages/projects';
import AppSettings from './pages/app-settings';
import UI from './pages/ui.js';



var routes = (
  <Route handler={Master} name="root" path="/">
    <Route handler={UI} name="ui">
      <Route handler={Projects} name="project"/>
      <Route handler={AppSettings} name="settings"/>
    </Route>

    <Route handler={Login} name="login"/>

    {localStorage.loggedIn ?
      <Redirect to='activities'/> :
      <Redirect to='login'/>}

    <NotFoundRoute handler={NotFound}/>
  </Route>
);


export default routes;
