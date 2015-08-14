/* @flow */

import React from 'react';
import Router from 'react-router';
import AppLeftNav from './app-left-nav';
import {AppBar, AppCanvas, Menu, Styles} from 'material-ui';

var RouteHandler = Router.RouteHandler;
var Colors = Styles.Colors;
var ThemeManager = new Styles.ThemeManager();


class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles() {
    // var {darkWhite, lightWhite} = Colors;
    return {
      // a: {
      //   color: darkWhite
      // },
      // p: {
      //   margin: '0 auto',
      //   padding: '0',
      //   color: lightWhite,
      //   maxWidth: '335px'
      // },
      // iconButton: {
      //   color: darkWhite
      // },
      containerStyle: {
        paddingTop: '64px',
        direction: 'rtl'
      }
    };
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() : React.Element {
    var styles = this.getStyles();
    var {router} = this.context;
    var title =
      router.isActive('activities')     ? 'فعالیت‌ها' :
      router.isActive('dashboard')          ? 'داشبورد' :
      router.isActive('profile-settings')   ? 'تنظیمات پروفایل' :
      router.isActive('app-settings')       ? 'تنظیمات' :
                                              'ثبت نام';

    return (
      <AppCanvas>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0} />

        <AppLeftNav ref="leftNav" />

        <div style={styles.containerStyle}>
          <RouteHandler />
        </div>

      </AppCanvas>
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
