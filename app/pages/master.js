/* @flow */

import React from 'react';
import Router from 'react-router';
import {connect} from 'react-redux';
import {MasterPageSelector} from '../selectors';
import AppLeftNav from '../components/app-left-nav';
import {AppBar, AppCanvas, CircularProgress, Styles} from 'material-ui';



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
      'login': 'ورود'
    };
    var title = titleMap[currentRoute];

    var loadingIcon;
    if (this.props.loading) {
      loadingIcon = <CircularProgress color='white' size={0.5}/>;
    }
    else {
      loadingIcon = <CircularProgress mode='determinate' size={0.5} value={0}/>;
    }

    return (
      <AppCanvas>
        <AppBar
          iconElementRight={loadingIcon}
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          showMenuIconButton={!!localStorage.loggedIn}
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

Master.propTypes = {
  loading: React.PropTypes.bool
};


export default connect(MasterPageSelector)(Master);
