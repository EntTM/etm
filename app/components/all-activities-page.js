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

class AllActivities extends React.Component {

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
      <Avatar
        backgroundColor={Colors.green500}
        style={{color:Colors.green100}}>

        X
      </Avatar>
    );

    var avatar2 = (
      <Avatar
        backgroundColor={Colors.green500}
        style={{color:Colors.green100}}>

        X
      </Avatar>
    );

    var avatar3 = (
      <Avatar
        backgroundColor={Colors.blue500}
        style={{color:Colors.blue100}}>

        W
      </Avatar>
    );

    var avatar4 = (
      <Avatar
        backgroundColor={Colors.blue500}
        style={{color:Colors.blue100}}>

        W
      </Avatar>
    );

    return (
      <div style={styles.containerStyle}>
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
            <h3>انجام شده در زمان: 2 روز و 4 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>رفع مشکل شماره 541 در صفحه‌ی دوم سایت</p>
          </CardText>
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
            <h3>انجام شده در زمان: 7 روز و 1 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>توسعه‌ی ماژول دلتا</p>
          </CardText>
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
            <h3>انجام شده در زمان: 21 روز و 12 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>ساخت صفحات مربوط به ماژول تتا</p>
          </CardText>
        </Card>
      </div>
    );
  }

}

AllActivities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default AllActivities;
