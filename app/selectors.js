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
  [globalSelector, projectsSelector],
  (global, projects) => (global.currentProjectId || projects[0].id)
);


// Page Selectors

export var ProjectsPageSelector = createSelector(
  [projectsSelector, groupedTasksSelector, currentProjectIdSelector],
  (projects, tasks, currentProjectId) => {
    return {
      currentProjectId,
      projects: projects.map(p => ({...p, tasks: tasks[p.id]}))};
  }
);

export var LoginPageSelector = createSelector(
  [loginSelector],
  (login) => {return {loginError: login.loginError}}
);

export var UIPageSelector = createSelector(
  [],
  () => {return {}}
);
