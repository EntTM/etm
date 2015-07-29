/* @flow */

import React from 'react';
import {RaisedButton, Dialog, Styles} from 'material-ui';



var ThemeManager = new Styles.ThemeManager(),
  {Colors} = Styles;

class Hello extends React.Component {
  constructor() {
    super();
    ThemeManager.setPalette({accent1Color: Colors.deepOrange500});

    this._handleTouchTap = () => {
      this.refs.superSecretPasswordDialog.show();
    };
  }

  getChildContext(): Object {
    return {muiTheme: ThemeManager.getCurrentTheme()};
  }

  render(): React.Element {
    var containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    var standardActions = [{text: 'Okey'}];
    return (
      <div style={containerStyle}>
        <Dialog
          actions={standardActions}
          ref='superSecretPasswordDialog'
          title='Super Secret Password'>
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label='Super Secret Password' onTouchTap={this._handleTouchTap} primary={true} />
      </div>
    );
  }
}

Hello.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Hello;
