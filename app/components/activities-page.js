/* @flow */

import React from 'react';
import {Snackbar, Styles} from 'material-ui';
import Filters from './filters';
import TaskList from './task-list';



var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Activities extends React.Component {

  constructor(props: Object) {
    super(props)
    this._handleJobDone = this._handleJobDone.bind(this)
    this._handleSnackbarAction = this._handleSnackbarAction.bind(this)
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleJobDone(): void {
    this.refs.snackbar.show();
  }

  _handleSnackbarAction(): void {
    this.refs.snackbar.dismiss();
  }

  _filterPastTasks(): void {
    console.log('Filter tasks and show just past Tasks');
  }

  _filterCurrentTasks(): void {
    console.log('Filter tasks and show just current Tasks');
  }

  _filterFutureTasks(): void {
    console.log('Filter tasks and show just future Tasks');
  }

  render(): React.Element {
    var tasks = [
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
      },
    ];

    return (
      <div>
        <Filters
          onCurrentTasks={this._filterCurrentTasks}
          onFutureTasks={this._filterFutureTasks}
          onPastTasks={this._filterPastTasks}/>

        <Snackbar
          action="لغو"
          autoHideDuration={5000}
          message="فعالیت مورد نظر تمام شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{minWidth: '100px', paddingRight: '0', paddingLeft: '12px'}}/>

        <TaskList
          onJobFinish={(j) => this._handleJobDone()}
          tasks={tasks}/>
      </div>
    );
  }

}

Activities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Activities;
