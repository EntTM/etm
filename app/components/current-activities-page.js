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
  RaisedButton,
  Snackbar,
  Styles
} from 'material-ui';

var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class CurrentActivities extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
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
      }
    };
  }

  _handleJobDone() {
    this.refs.snackbar.show();
  }

  _handleSnackbarAction() {
    this.refs.snackbar.dismiss();
  }

  render() {
    var styles = this.getStyles();

    var avatar = (
      <Avatar backgroundColor={Colors.greenA700} />
    );

    var avatar2 = (
      <Avatar backgroundColor={Colors.redA700} />
    );

    var avatar3 = (
      <Avatar backgroundColor={Colors.yellowA700} />
    );

    var avatar4 = (
      <Avatar backgroundColor={Colors.greenA700} />
    );

    return (
      <div style={styles.containerStyle}>
        <Snackbar
          action="لغو"
          autoHideDuration={0}
          message="فعالیت‌های انجام شده منتقل شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{float:'left', textAlign:'left'}} />

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی ایکس"
            title="فعالیت اول" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>زمان باقی‌مانده: 14 روز و 21 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>بهبود عملکرد ماژول ایگرگ در صفحه‌ی زد</p>
          </CardText>

          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone} />
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar2}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی ایکس"
            title="فعالیت دوم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>زمان باقی‌مانده: 2 روز و 4 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>رفع مشکل شماره 541 در صفحه‌ی دوم سایت</p>
          </CardText>

          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone} />
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar3}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی شرکت دبلیو"
            title="فعالیت سوم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>زمان باقی‌مانده: 7 روز و 1 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>توسعه‌ی ماژول دلتا</p>
          </CardText>

          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone} />
          </CardActions>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar4}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            subtitle="پروژه‌ی شرکت دبلیو"
            title="فعالیت چهارم" />

          <CardText expandable={true} style={styles.rtl}>
            <h3>زمان باقی‌مانده: 21 روز و 12 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>ساخت صفحات مربوط به ماژول تتا</p>
          </CardText>

          <CardActions expandable={true}>
            <RaisedButton
              label="اتمام کار"
              onTouchTap={this._handleJobDone} />
          </CardActions>
        </Card>
      </div>
    );
  }

}

CurrentActivities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default CurrentActivities;
