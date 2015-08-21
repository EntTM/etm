/* @flow */

import React from 'react';
import {
  Paper,
  FloatingActionButton,
  FontIcon,
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
    this.state = {kind: 'button'};
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
        width: '85%',
        margin: 'auto',
        marginTop: 180
      },
      textfield: {
        display: 'box',
        margin: 'auto'
      },
      button: {
        direction: 'ltr',
        position: 'relative',
        top: 28,
        display: 'block',
        width: 56,
        margin: 'auto',
        textAlign: 'center'
      },
      firstButton: {
        direction: 'ltr',
        position: 'absolute',
        left: '50%',
        top: 400,
        marginLeft: -28
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

    var loginDialog = (
      <Paper rounded={true} style={styles.containerStyle}>
        <h1>ورود</h1>

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

        <FloatingActionButton circle={true} style={styles.button}>
          <FontIcon className='material-icons'>vpn_key</FontIcon>
        </FloatingActionButton>
      </Paper>
    );

    var enterButton = (
      <FloatingActionButton
        onTouchTap={() => this.setState({kind: 'login'})}
        style={styles.firstButton}>
        <FontIcon className='material-icons'>arrow_forward</FontIcon>
      </FloatingActionButton>
    );

    switch (this.state.kind) {
      case 'login':
      case 'failed':
        return loginDialog;
      case 'button':
        return enterButton;
    }
  }
}

Login.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Login.propTypes = {
  dispatch: React.PropTypes.func
};


export default connect(LoginPageSelector)(Login);
