/* @flow */

import React from 'react';
import Router from 'react-router';
import AppLeftNav from '../components/app-left-nav';
import {Styles} from 'material-ui';
import background from '../../images/background@blurred.jpg';



var ThemeManager = new Styles.ThemeManager();

var RouteHandler = Router.RouteHandler;


class Master extends React.Component {
  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(): React.Element {
    return (
      <div style={{direction: 'rtl'}}>
        <img
          src={background}
          style={{
            transform: 'translate3d(0,0,0)',
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: -1000
          }}
        />

        <AppLeftNav ref='leftNav'/>

        <RouteHandler menu={() => this.refs.leftNav.toggle()}/>
      </div>
    );
  }
}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};


export default Master;
