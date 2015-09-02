/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {Avatar, TextField} from 'material-ui';
import ExpandableButton from '../components/expandable-button';
import ThreeButton from '../components/three-button';
import {loginAction, loadingAction} from '../actions';
import {LoginPageSelector} from '../selectors';
import back from '../../images/back.png';



var styles = {
  expandableButton: {
    position: 'absolute',
    left: '50%'
  },
  dialogContainer: {
    direction: 'rtl'
  },
  textfield: {
    display: 'box',
    margin: 'auto'
  },
  threeButton: {
    position: 'absolute',
    left: -28
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
    var signupButton = (
      <ThreeButton
        firstColor='blue'
        firstIcon='vpn_key'
        onTouchTap={this._handleSignUpTap}
        secondColor='red'
        secondIcon='warning'
        size='56px'
        state={
          this.state.kind === 'loading' ? 'loading'
            : this.state.kind === 'failed'  ? 'second'
              : 'first'
        }
        style={styles.threeButton}
      />
    );

    return (
      <ExpandableButton
        color={this.state.kind !== 'button' ? 'white' : 'red'}
        expand={this.state.kind !== 'button'}
        expandedHeight='115vw'
        expandedWidth='85vw'
        initialSize='13.53vw'
        materialIcon='arrow_forward'
        onTouchTap={() => this.setState({kind: 'login'})}
        style={{
          ...styles.expandableButton,
          top: (this.state.kind !== 'button' ? '10vh' : '55vh'),
          marginLeft: (this.state.kind !== 'button' ? '-42.5vw' : '-6.765vw')
        }}
      >
        <div style={styles.dialogContainer}>
          <img
            src={back}
            style={{width: '100%', height: 200}}
          />

          <Avatar size={50} style={styles.avatar}>
            <i className='material-icons'>person</i>
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
        </div>
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
