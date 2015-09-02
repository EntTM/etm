/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {
  Avatar,
  Paper,
  FloatingActionButton,
  FontIcon,
  RefreshIndicator,
  Styles,
  TextField
} from 'material-ui';
import ExpandableButton from '../components/expandable-button';
import {loginAction, loadingAction} from '../actions';
import {LoginPageSelector} from '../selectors';
import back from '../../images/back.png';



var ThemeManager = new Styles.ThemeManager();

var styles = {
  containerStyle: {
    width: '85%',
    margin: 'auto',
    marginTop: 80
  },
  expandableButton: {
    position: 'absolute',
    left: '50%',
    top: '55vh'
  },
  textfield: {
    display: 'box',
    margin: 'auto'
  },
  button: {
    direction: 'ltr',
    position: 'absolute',
    left: -28,
    display: 'block',
    width: 56,
    textAlign: 'center'
  },
  avatar: {
    position: 'absolute',
    direction: 'ltr',
    top: 250,
    right: 60
  },
  signupWrapper: {
    position: 'relative',
    height: 26,
    left: '50%'
  }
};

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

  componentWillReceiveProps(nextProps) {
    if (!this.props.loginError && !!nextProps.loginError) {
      this.setState({kind: 'failed'});
    }
  }

  _handleSignUpTap(): void {
    this.setState({kind: 'loading'});
    this.props.dispatch(loadingAction(true));
    var usr = this.refs.username.getValue();
    var pw  = this.refs.password.getValue();
    this.props.dispatch(loginAction(usr, pw));
  }

  render(): React.Element {
    var signupButton = (<RefreshIndicator left={-28} size={56} status="loading" top={0}/>);

    if (this.state.kind !== 'loading') {
      signupButton = (
        <FloatingActionButton
          backgroundColor={this.state.kind === 'failed' ? 'red' : 'blue'}
          circle={true}
          onTouchTap={this._handleSignUpTap}
          style={styles.button}
        >
          <FontIcon className='material-icons'>{this.state.kind === 'login' ? 'vpn_key' : 'warning'}</FontIcon>
        </FloatingActionButton>
      );
    }

    var loginDialog = (
      <Paper rounded={true} style={styles.containerStyle}>
        <img
          src={back}
          style={{width: '100%', height: 200}}
        />

        <Avatar size={50} style={styles.avatar}>
          <FontIcon className='material-icons'>person</FontIcon>
        </Avatar>

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

        <div style={styles.signupWrapper}>{signupButton}</div>
      </Paper>
    );

    return (
      <ExpandableButton
        color='red'
        expand={this.state.kind !== 'button'}
        initialSize='13.53vw'
        materialIcon='arrow_forward'
        onTouchTap={() => this.setState({kind: 'login'})}
        style={{
          ...styles.expandableButton,
          marginLeft: `${-13.53 / 2}vw`
        }}
      >
        {loginDialog}
      </ExpandableButton>
    );
  }
}

Login.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Login.propTypes = {
  dispatch: React.PropTypes.func,
  loginError: React.PropTypes.bool
};


export default connect(LoginPageSelector)(Login);
