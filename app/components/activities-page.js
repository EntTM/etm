/* @flow */

import React from 'react';
import rd3 from 'react-d3-components';
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

var Transitions = Styles.Transitions;
var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Activities extends React.Component {

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
        bottom: '25px',
        zIndex: '999',
        direction: 'ltr',
        transition: 'transform 0.5s',
        transitionTimingFunction: 'ease-in'
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
    this.refs.snackbar.show();
  }

  render() : React.Element {
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

    // var fabIcon = (this.isExpanded)?
    //   <FontIcon className="material-icons">clear</FontIcon> :
    //     <FontIcon className="material-icons">add</FontIcon>;

    var BarChart = rd3.BarChart;

    var data = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];

    return (
      <div style={styles.containerStyle}>
        <FloatingActionButton
          isExpanded={false}
          onTouchTap={this._handleFabTouch}
          ref="fabButton"
          style={styles.fabStyle}>
          <FontIcon className="material-icons" ref="fabIcon">add</FontIcon>
        </FloatingActionButton>

        <Snackbar
          action="لغو"
          autoHideDuration={0}
          message="فعالیت مورد نظر تمام شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{direction: 'rtl', float:'left', textAlign:'left'}}/>

          <BarChart
              data={data}
              height={400}
              margin={{top: 10, bottom: 50, left: 50, right: 10}}
              width={window.innerWidth}/>

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

Activities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Activities;
