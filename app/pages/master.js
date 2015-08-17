/* @flow */

import React from 'react';
import Router from 'react-router';
import AppLeftNav from '../components/app-left-nav';
import {AppBar, AppCanvas, Styles} from 'material-ui';



var ThemeManager = new Styles.ThemeManager();

var RouteHandler = Router.RouteHandler;


class Master extends React.Component {
  constructor(props: Object) {
    super(props);
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles(): Object {
    return {
      containerStyle: {
        paddingTop: '64px',
        direction: 'rtl'
      }
    };
  }

  _onLeftIconButtonTouchTap(): void {
    this.refs.leftNav.toggle();
  }

  render(): React.Element {
    var styles = this.getStyles();
    var {router} = this.context;
    var currentRoute = router.getRouteAtDepth(1).name;
    var titleMap = {
      'activities': 'فعالیت‌ها',
      'dashboard': 'داشبورد',
      'profile-settings': 'تنظیمات پروفایل',
      'app-settings': 'تنظیمات',
      'login': 'ثبت نام'
    };
    var title = titleMap[currentRoute];

    return (
      <AppCanvas>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
        />

        <AppLeftNav ref="leftNav"/>

        <div style={styles.containerStyle}>
          <RouteHandler/>
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
