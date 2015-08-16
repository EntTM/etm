/* @flow */

import React from 'react';
import {
  ClearFix,
  Dialog,
  FontIcon,
  RaisedButton,
  Styles,
  TextField
} from 'material-ui';



var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Login extends React.Component {

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount(): void {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  getStyles(): Object {
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
  }

  _handleSignUpTap(): void {
    this.refs.signUpDialog.show();
  }

  render(): React.Element {
    var styles = this.getStyles();

    var standardActions = [
      {text: 'فهمیدم'}
    ];

    return (
      <div>
        <div style={styles.containerStyle}>
          <Dialog
            actions={standardActions}
            ref='signUpDialog'
            title='ثبت نام موفق'>

            تبریک... شما با موفقیت ثبت نام کردید.
          </Dialog>

          <div style={styles.group}>
            <TextField
              floatingLabelText='نام و نام خانوادگی'
              hintText='نام واقعی خود را وارد کنید' /><br/>
            <TextField
              floatingLabelText='نام کاربری'
              hintText='نام کاربری باید یکتا باشد' /><br/>
            <TextField
              floatingLabelText='پست الکترونیک'
              hintText='example@sample.com' /><br/>
            <TextField
              floatingLabelText='رمز عبور'
              hintText='حداقل 8 کاراکتر'
              type='password' /><br/>
            <RaisedButton
              label='ثبت نام'
              onTouchTap={this._handleSignUpTap}
              primary={true}
              style={styles.textfield} />
          </div>
        </div>
      </div>
    );
  }

}

Login.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default Login;
