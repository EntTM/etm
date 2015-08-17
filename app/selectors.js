/* @flow */

import {createSelector} from 'reselect';



var tasksSelector = (s) => s.tasks;


export var ActivitiesPageSelector = createSelector(
  [tasksSelector],
  (tasks) => {return {tasks}}
);
