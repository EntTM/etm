/* @flow */

import type {Action} from './actions';
import {TEST_ACTION} from './actions';



var initialTasks = [
  {
    subtitle: 'پروژه‌ی ایکس',
    remaining: '14 روز و 21 ساعت',
    details: 'بهبود عملکرد ماژول ایگرگ در صفحه‌ی زد',
    title: 'فعالیت اول'
  },
  {
    subtitle: 'پروژه‌ی ایکس',
    remaining: '2 روز و 4 ساعت',
    details: 'رفع مشکل شماره 541 در صفحه‌ی دوم سایت',
    title: 'فعالیت دوم'
  },
  {
    subtitle: 'پروژه‌ی شرکت دبلیو',
    remaining: '7 روز و 1 ساعت',
    details: 'توسعه‌ی ماژول دلتا',
    title: 'فعالیت سوم'
  },
  {
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
