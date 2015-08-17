let React = require('react');
let {
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
  } = require('material-ui');

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;

let CurrentActivitiesPage = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  getStyles() {
    return {
      containerStyle: {
        textAlign: 'right'
      }
    };
  },

  render() {

    let styles = this.getStyles();
    return (
      <div style={styles.containerStyle}>
        <Snackbar
          ref="snackbar"
          message="فعالیت‌های انجام شده منتقل شد"
          action="لغو"
          autoHideDuration={0}
          style={{float:'left', textAlign:'left'}}
          onActionTouchTap={this._handleSnackbarAction}/>

        <Card initiallyExpanded={true}>
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت اول"
            subtitle="پروژه‌ی ایکس"
            avatar={
              <Avatar backgroundColor={Colors.greenA700}></Avatar>
              }
            showExpandableButton={true}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>زمان باقی‌مانده: 14 روز و 21 ساعت</h3>
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
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت دوم"
            subtitle="پروژه‌ی ایکس"
            avatar={
              <Avatar backgroundColor={Colors.redA700}></Avatar>
              }
            showExpandableButton={true}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>زمان باقی‌مانده: 2 روز و 4 ساعت</h3>
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
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت سوم"
            subtitle="پروژه‌ی شرکت دبلیو"
            avatar={
              <Avatar backgroundColor={Colors.yellowA700}></Avatar>
              }
            showExpandableButton={true}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>زمان باقی‌مانده: 7 روز و 1 ساعت</h3>
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
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت چهارم"
            subtitle="پروژه‌ی شرکت دبلیو"
            avatar={
              <Avatar backgroundColor={Colors.greenA700}></Avatar>
              }
            showExpandableButton={true}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>زمان باقی‌مانده: 21 روز و 12 ساعت</h3>
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
  },

  _handleJobDone() {
    this.refs.snackbar.show();
  },

  _handleSnackbarAction() {
    this.refs.snackbar.dismiss();
  }

});

module.exports = CurrentActivitiesPage;
