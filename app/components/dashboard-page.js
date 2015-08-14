/* @flow */

import React from 'react';
import {CircularProgress, Styles} from 'material-ui';

var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Dashboard extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() : React.Element {
    var containerStyle = {
      textAlign: 'center',
      paddingTop: '50px'
    };

    return (
      <div style={containerStyle}>
        <h1>Enterprise Task Manager</h1>
        <h2>Dashboard</h2>
        <CircularProgress mode="indeterminate" />
      </div>
    );
  }

}

Dashboard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Dashboard;
