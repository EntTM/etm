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

let AllActivitiesPage = React.createClass({

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
        <Card initiallyExpanded={true}>
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت اول"
            subtitle="پروژه‌ی ایکس"
            showExpandableButton={true}
            avatar={<Avatar backgroundColor={Colors.green500} style={{color:Colors.green100}}>X</Avatar>}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>انجام شده در زمان: 14 روز و 21 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>بهبود عملکرد ماژول ایگرگ در صفحه‌ی زد</p>
          </CardText>
        </Card>
        <div style={{height:'5px'}}></div>
        <Card initiallyExpanded={true}>
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت دوم"
            subtitle="پروژه‌ی ایکس"
            showExpandableButton={true}
            avatar={<Avatar backgroundColor={Colors.green500} style={{color:Colors.green100}}>X</Avatar>}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>انجام شده در زمان: 2 روز و 4 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>رفع مشکل شماره 541 در صفحه‌ی دوم سایت</p>
          </CardText>
        </Card>
        <div style={{height:'5px'}}></div>
        <Card initiallyExpanded={true}>
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت سوم"
            subtitle="پروژه‌ی شرکت دبلیو"
            showExpandableButton={true}
            avatar={<Avatar backgroundColor={Colors.blue500} style={{color:Colors.blue100}}>W</Avatar>}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>انجام شده در زمان: 7 روز و 1 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>توسعه‌ی ماژول دلتا</p>
          </CardText>
        </Card>
        <div style={{height:'5px'}}></div>
        <Card initiallyExpanded={true}>
          <CardHeader style={{paddingRight: '40px'}}
            title="فعالیت چهارم"
            subtitle="پروژه‌ی شرکت دبلیو"
            showExpandableButton={true}
            avatar={<Avatar backgroundColor={Colors.blue500} style={{color:Colors.blue100}}>W</Avatar>}>
          </CardHeader>
          <CardText style={styles.rtl} expandable={true}>
            <h3>انجام شده در زمان: 21 روز و 12 ساعت</h3>
            <h3>توضیحات:</h3>
            <p>ساخت صفحات مربوط به ماژول تتا</p>
          </CardText>
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

module.exports = AllActivitiesPage;
