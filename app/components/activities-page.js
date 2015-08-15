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
  FloatingActionButton,
  FontIcon,
  RaisedButton,
  Snackbar,
  Styles
} from 'material-ui';

var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Activities extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isExpanded: false}
    this._handleFabTouch = this._handleFabTouch.bind(this)
    this._handleJobDone = this._handleJobDone.bind(this)
    this._handleSnackbarAction = this._handleSnackbarAction.bind(this)
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  getStyles() {
    return {
      containerStyle: {
        textAlign: 'right'
      },
      fabStyle: {
        position: 'fixed',
        right: '15px',
        bottom: '24px',
        zIndex: '999',
        direction: 'ltr',
        transition: 'transform 0.2s',
        transitionTimingFunction: 'ease-in'
      },
      filterFabsStyle: {
        position: 'fixed',
        right: '22px',
        bottom: '32px',
        zIndex: '990',
        direction: 'ltr',
        transition: 'bottom 0.2s',
        transitionTimingFunction: 'ease-in',
      }
    };
  }

  _handleJobDone() {
    this.refs.snackbar.show();
  }

  _handleSnackbarAction() {
    this.refs.snackbar.dismiss();
  }

  _handleFabTouch() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  _filterPastTasks() {
    console.log('Filter tasks and show just past Tasks');
  }

  _filterCurrentTasks() {
    console.log('Filter tasks and show just current Tasks');
  }

  _filterFutureTasks() {
    console.log('Filter tasks and show just future Tasks');
  }

  render() : React.Element {
    var styles = this.getStyles();

    var avatar = (
      <FontIcon className="material-icons" style={{direction: 'ltr', fontSize: '40px'}}>assignment</FontIcon>
    );

    var data = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];

    var rotate45 = {transform: 'rotate(45deg)'};
    return (
      <div style={styles.containerStyle}>
        <FloatingActionButton
          onTouchTap={this._handleFabTouch}
          ref="fab"
          style={Object.assign({}, styles.fabStyle, this.state.isExpanded && rotate45)} >
          <FontIcon className="material-icons" ref="fabIcon">add</FontIcon>
        </FloatingActionButton>
        <div>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterCurrentTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '100px'})} >
            <FontIcon className="material-icons" ref="fabIcon">play_arrow</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterPastTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '150px'})} >
            <FontIcon className="material-icons" ref="fabIcon">done</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterFutureTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '200px'})} >
            <FontIcon className="material-icons" ref="fabIcon">trending_up</FontIcon>
          </FloatingActionButton>
        </div>
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
