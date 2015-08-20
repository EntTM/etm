/* @flow */

import React from 'react';
import {
  Dialog,
  RaisedButton,
  Styles,
  TextField
} from 'material-ui';
import {connect} from 'react-redux';
import {loginAction, loadingAction} from '../actions';
import {LoginPageSelector} from '../selectors';



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
    this.props.dispatch(loadingAction(true));
    var usr = this.refs.username.getValue();
    var pw  = this.refs.password.getValue();
    this.props.dispatch(loginAction(usr, pw));
  }

  render(): React.Element {
    var styles = this.getStyles();

    return (
      <div style={styles.containerStyle}>
        <div style={styles.group}>
          <TextField
            floatingLabelText='نام کاربری'
            hintText='نام کاربری باید یکتا باشد'
            ref="username"
            style={styles.textfield}
          />

          <TextField
            floatingLabelText='رمز عبور'
            hintText='حداقل 8 کاراکتر'
            ref="password"
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

Login.propTypes = {
  dispatch: React.PropTypes.func
};


export default connect(LoginPageSelector)(Login);
