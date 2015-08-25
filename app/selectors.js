/* @flow */

import {createSelector} from 'reselect';



// Scope Selectors

var tasksSelector = s => s.tasks;
var projectsSelector = s => s.projects;
var globalSelector = s => s.global;
var loginSelector = s => s.login;


// Computed Selectors

var groupedTasksSelector = createSelector(
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

    return tasks;
  }
);

var currentProjectIdSelector = createSelector(
  [globalSelector, groupedTasksSelector],
  (global, tasks) => (global.currentProjectId || Object.keys(tasks)[0])
);


// Page Selectors

export var ProjectsPageSelector = createSelector(
  [groupedTasksSelector, currentProjectIdSelector],
  (tasks, currentProjectId) => {
    return {tasks, currentProjectId};
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

export var UIPageSelector = createSelector(
  [],
  () => {return {}}
);
