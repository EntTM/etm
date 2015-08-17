/* @flow */

import {createSelector} from 'reselect';



var tasksSelector = (s) => s.tasks;
var projectsSelector = (s) => s.projects;


export var ActivitiesPageSelector = createSelector(
  [tasksSelector],
  (tasks) => {return {tasks}}
);

export var DashboardPageSelector = createSelector(
  [projectsSelector],
  (projects) => {return {projects}}
);

export var LoginPageSelector = createSelector(
  [],
  () => {return {}}
);
