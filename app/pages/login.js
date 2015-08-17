/* @flow */

import React from 'react';
import {
  Dialog,
  RaisedButton,
  Styles,
  TextField
} from 'material-ui';



var ThemeManager = new Styles.ThemeManager();

class Login extends React.Component {
  constructor(props: Object) {
    super(props);
    this._handleSignUpTap = this._handleSignUpTap.bind(this);
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  getStyles(): Object {
    return {
      containerStyle: {
        textAlign: 'center',
        paddingTop: '50px'
      },
      group: {
        width: '100%',
        float: 'left',
        marginBottom: 32
      },
      textfield: {
        display: 'box',
        margin: 'auto'
      },
      raisedbutton: {
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
            hintText='نام واقعی خود را وارد کنید'
            style={styles.textfield}
          />

          <TextField
            floatingLabelText='نام کاربری'
            hintText='نام کاربری باید یکتا باشد'
            style={styles.textfield}
          />

          <TextField
            floatingLabelText='پست الکترونیک'
            hintText='example@sample.com'
            style={styles.textfield}
          />

          <TextField
            floatingLabelText='رمز عبور'
            hintText='حداقل 8 کاراکتر'
            style={styles.textfield}
            type='password'
          />

          <RaisedButton
            label='ثبت نام'
            onTouchTap={this._handleSignUpTap}
            primary={true}
            style={styles.raisedbutton}
          />
        </div>
      </div>
    );
  }
}

Login.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default Login;
