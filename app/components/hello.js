/* @flow */

import React from 'react';
import {RaisedButton, Dialog, Styles} from 'material-ui';
import {connect} from 'react-redux';
import {createTestAction} from '../actions';



var ThemeManager = new Styles.ThemeManager(),
  {Colors} = Styles;

class Hello extends React.Component {
  constructor() {
    super();
    ThemeManager.setPalette({accent1Color: Colors.deepOrange500});

    this._handleTouchTap = () => {
      this.refs.superSecretPasswordDialog.show();
    };

    this._onDialogOk = () => {
      var input = React.findDOMNode(this.refs.input);
      var action = createTestAction(input.value);
      this.props.dispatch(action);
      this.refs.superSecretPasswordDialog.dismiss();
    };
  }

  getChildContext(): Object {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  }

  render(): React.Element {
    var {text} = this.props;

    var containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    var standardActions = [
      {text: 'Cancel'},
      {text: 'Okey', onTouchTap: this._onDialogOk, ref: 'submit'}
    ];
    return (
      <div style={containerStyle}>
        <Dialog
          actions={standardActions}
          ref='superSecretPasswordDialog'
          title='Super Secret Password'>
          <input ref='input' type='text' />
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <p>{text}</p>

        <RaisedButton label='Super Secret Password' onTouchTap={this._handleTouchTap} primary={true} />
      </div>
    );
  }
}

Hello.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Hello.propTypes = {
  dispatch: React.PropTypes.Function,
  text: React.PropTypes.string
};


function select(state) {
  return state.test;
}

export default connect(select)(Hello);
