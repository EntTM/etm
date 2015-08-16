/* @flow */

import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  FontIcon,
  RaisedButton
} from 'material-ui';



class TaskList extends React.Component {
  render(): React.Element {
    var avatar = (
      <FontIcon className="material-icons" style={{direction: 'ltr', fontSize: '40px'}}>assignment</FontIcon>
    );

    return (
      <div>
        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی ایکس"
            title="فعالیت اول" />

          <CardText expandable={true}>
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

          <CardText expandable={true}>
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

          <CardText expandable={true}>
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

          <CardText expandable={true}>
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

export default TaskList;
