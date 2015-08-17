/* @flow */

import type {Action} from './actions';
import {} from './actions';
import {Styles} from 'material-ui';



var initialTasks = [
  {
    id: 1,
    subtitle: 'پروژه‌ی ایکس',
    remaining: '14 روز و 21 ساعت',
    details: 'بهبود عملکرد ماژول ایگرگ در صفحه‌ی زد',
    title: 'فعالیت اول'
  },
  {
    id: 2,
    subtitle: 'پروژه‌ی ایکس',
    remaining: '2 روز و 4 ساعت',
    details: 'رفع مشکل شماره 541 در صفحه‌ی دوم سایت',
    title: 'فعالیت دوم'
  },
  {
    id: 3,
    subtitle: 'پروژه‌ی شرکت دبلیو',
    remaining: '7 روز و 1 ساعت',
    details: 'توسعه‌ی ماژول دلتا',
    title: 'فعالیت سوم'
  },
  {
    id: 4,
    subtitle: 'پروژه‌ی شرکت دبلیو',
    remaining: '21 روز و 12 ساعت',
    details: 'ساخت صفحات مربوط به ماژول تتا',
    title: 'فعالیت چهارم'
  }
];

export function tasks(state: any, action: Action): any {
  if (typeof state === 'undefined') {
    state = initialTasks;
  }

  switch(action.type){
    default:
      return state;
  }
}


var barData = [{
  label: 'somethingA',
  values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];

var areaData = [
  {
    label: 'somethingA',
    values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
  },
  {
    label: 'somethingB',
    values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
  }
];

var {Colors} = Styles;

var projects = [
  {
    id: 1,
    color: Colors.red500,
    barData,
    areaData,
    projectStatus: 40,
    projectTime: 60,
    title: 'پروژه‌ی ایکس'
  },
  {
    id: 2,
    color: Colors.yellow500,
    barData,
    areaData,
    projectStatus: 45,
    projectTime: 52,
    title: 'پروژه‌ی شرکت دبلیو'
  },
  {
    id: 3,
    color: Colors.green500,
    barData,
    areaData,
    projectStatus: 70,
    projectTime: 62,
    title: 'پروژه‌ی شرکت زد'
  },
];

export function projects(state: any, action: Action): any {
  if (typeof state === 'undefined') {
    state = projects;
  }

  switch(action.type){
    default:
      return state;
  }
}
