/* @flow */

import React from 'react';
import Router from 'react-router';
import AppLeftNav from '../components/app-left-nav';
import {AppCanvas, Styles} from 'material-ui';
import MainAppBar from '../components/main-app-bar';
import background from '../../images/background@blurred.jpg';



var ThemeManager = new Styles.ThemeManager();

var RouteHandler = Router.RouteHandler;


class Master extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles(): Object {
    return {
      containerStyle: {
        direction: 'rtl'
      }
    };
  }

  render(): React.Element {
    var styles = this.getStyles();
    var {router} = this.context;

    var titleMap = {
      'activities': 'فعالیت‌ها',
      'dashboard': 'داشبورد',
      'profile-settings': 'تنظیمات پروفایل',
      'app-settings': 'تنظیمات'
    };

    var currentRoute = router.getRouteAtDepth(2);
    var title = currentRoute && titleMap[currentRoute.name];

    return (
      <div style={styles.containerStyle}>
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

        <AppLeftNav ref="leftNav"/>

        <RouteHandler menu={()=>this.refs.leftNav.toggle()} title={title}/>
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
