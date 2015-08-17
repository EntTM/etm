/* @flow */

import {createSelector} from 'reselect';



var tasksSelector = s => s.tasks;
var projectsSelector = s => s.projects;
var globalSelector = s => s.global;


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

export var MasterPageSelector = createSelector(
  [globalSelector],
  (global) => {return {loading: global.loading}}
);
