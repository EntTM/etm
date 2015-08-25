/* @flow */

import {createSelector} from 'reselect';



var tasksSelector = s => s.tasks;
var projectsSelector = s => s.projects;
var globalSelector = s => s.global;
var loginSelector = s => s.login;


export var ActivitiesPageSelector = createSelector(
  [tasksSelector],
  (tasksList) => {
    var tasks = {};

    for (var task of tasksList) {
      var tl = tasks[task.projectId];
      if (tl instanceof Array) {
        tl.push(task);
      }
      else {
        tasks[task.projectId] = [task];
      }
    }

    return {tasks};
  }
);

export var DashboardPageSelector = createSelector(
  [projectsSelector],
  (projects) => {return {projects}}
);

export var LoginPageSelector = createSelector(
  [loginSelector],
  (login) => {return {loginError: login.loginError}}
);
