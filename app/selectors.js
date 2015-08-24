/* @flow */

import {createSelector} from 'reselect';



var tasksSelector = s => s.tasks;
var projectsSelector = s => s.projects;
var globalSelector = s => s.global;
var loginSelector = s => s.login;


export var ActivitiesPageSelector = createSelector(
  [tasksSelector],
  (tasks) => {return {tasks}}
);

export var DashboardPageSelector = createSelector(
  [projectsSelector],
  (projects) => {return {projects}}
);

export var LoginPageSelector = createSelector(
  [loginSelector],
  (login) => {return {loginError: login.loginError}}
);
