let React = require('react');
let {
  ClearFix,
  Dialog,
  FontIcon,
  RaisedButton,
  Styles,
  TextField
  } = require('material-ui');

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;

let LoginPage = React.createClass({

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
        textAlign: 'center',
        paddingTop: '50px'
      },
      FABStyle: {
        position: 'absolute',
        right: '30px',
        bottom: '40px'
      },
      iconStyle: {
        fontSize: '15px',
        letterSpacing: '0',
        lineHeight: '24px',
        paddingTop: '3px',
        marginBottom: '13px',
      },
      group: {
        width: '100%',
        float: 'left',
        marginBottom: 32
      },
      textfield: {
        marginTop: 24
      }
    };
  },

  render() {

    let styles = this.getStyles();

    let standardActions = [
      { text: "فهمیدم" }
    ];

    return (
      <div>
        <div style={styles.containerStyle}>
          <Dialog
            title="ثبت نام موفق"
            actions={standardActions}
            ref="signUpDialog">
            تبریک... شما با موفقیت ثبت نام کردید.
          </Dialog>

            <div style={styles.group}>
              <TextField
                hintText="نام واقعی خود را وارد کنید"
                floatingLabelText="نام و نام خانوادگی" /><br/>
              <TextField
                hintText="نام کاربری باید یکتا باشد"
                floatingLabelText="نام کاربری" /><br/>
              <TextField
                  hintText="example@sample.com"
                  floatingLabelText="پست الکترونیک" /><br/>
              <TextField
                  hintText="حداقل 8 کاراکتر"
                  floatingLabelText="رمز عبور"
                  type="password" /><br/>
              <RaisedButton
                  style={styles.textfield}
                  label="ثبت نام"
                  primary={true}
                  onTouchTap={this._handleSignUpTap} />
            </div>
        </div>
      </div>
    );
  },

  _handleSignUpTap() {
    this.refs.signUpDialog.show();
  }

});

module.exports = LoginPage;
