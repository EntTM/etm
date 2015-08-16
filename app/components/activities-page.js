/* @flow */

import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardText,
  CardTitle,
  FontIcon,
  RaisedButton,
  Snackbar,
  Styles
} from 'material-ui';
import Filters from './filters';



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
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  getStyles(): Object {
    return {
      containerStyle: {
        textAlign: 'right'
      }
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
    var styles = this.getStyles();

    var avatar = (
      <FontIcon className="material-icons" style={{direction: 'ltr', fontSize: '40px'}}>assignment</FontIcon>
    );

    var data = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];

    return (
      <div style={styles.containerStyle}>
        <Filters
          onCurrentTasks={this._filterCurrentTasks}
          onFutureTasks={this._filterFutureTasks}
          onPastTasks={this._filterPastTasks}/>
        <Snackbar
          action="لغو"
          autoHideDuration={0}
          message="فعالیت مورد نظر تمام شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{minWidth: '100px', paddingRight: '0', paddingLeft: '12px'}}/>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی ایکس"
            title="فعالیت اول" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>انجام شده در زمان: 14 روز و 21 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>بهبود عملکرد ماژول ایگرگ در صفحه‌ی زد</p>
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone}/>
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی ایکس"
            title="فعالیت دوم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>انجام شده در زمان: 2 روز و 4 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>رفع مشکل شماره 541 در صفحه‌ی دوم سایت</p>
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone}/>
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی شرکت دبلیو"
            title="فعالیت سوم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>انجام شده در زمان: 7 روز و 1 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>توسعه‌ی ماژول دلتا</p>
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone}/>
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی شرکت دبلیو"
            title="فعالیت چهارم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>انجام شده در زمان: 21 روز و 12 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>ساخت صفحات مربوط به ماژول تتا</p>
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone}/>
          </CardActions>
        </Card>
      </div>
    );
  }

}

Activities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Activities;
