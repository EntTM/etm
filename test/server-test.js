/* @flow */

import test from 'tape';
import {tasks, projects} from './sample-server-response';



// Mock some globals
global.btoa = (s) => s;

var mockAddrs = {
  'http://www.example.com/all/tasks': {json: () => tasks},
  'http://www.example.com/all/projects': {json: () => projects}
};

global.fetch = (url, opt) => new Promise(resolve => {
  if (url in mockAddrs) {
    resolve(mockAddrs[url]);
  }
  else {
    throw new Error(`Address wasn't mocked (${url})`);
  }
});

// Now require the test subject
var {getAllTasks, getAllProjects} = require('../app/server');


test('getAllTasks must return a promise of all tasks', (t) => {
  t.plan(1);

  getAllTasks()
    .then(result => {
      t.equal(result, tasks);
    })
    .catch(error => t.fail(error));
});

test('getAllProjects must return a promise of all projects', (t) => {
  t.plan(1);

  getAllProjects()
    .then(result => {
      t.equal(result, projects);
    })
    .catch(error => t.fail(error));
});
