/* @flow */

import React from 'react';
import {RouteHandler} from 'react-router';
import MainAppBar from '../components/main-app-bar';
import router from '../router';



class UI extends React.Component {
  _title() {
    switch (router.getCurrentPathname()) {
      case '/ui/activities':
        return 'فعالیت های جاری';
      case '/ui/dashboard':
        return 'داشبورد';
      case '/ui/settings':
        return 'تنظیمات برنامه';
      default:
        return router.getCurrentPathname();
    }
  }

  render(): React.Element {
    return (
      <div>
        <MainAppBar onBackTouch={router.goBack} onMenuTouch={this.props.menu} title={this._title()}/>

        <RouteHandler/>
      </div>
    );
  }
}

UI.propTypes = {
  menu: React.PropTypes.func,
  title: React.PropTypes.string
};


export default UI;
