/* @flow */

import React from 'react';
import {RouteHandler} from 'react-router';
import {connect} from 'react-redux';
import MainAppBar from '../components/main-app-bar';
import router from '../router';
import {gotoSettingsAction} from '../actions';
import {UIPageSelector} from '../selectors';



class UI extends React.Component {
  constructor(props) {
    super(props);
    this._handleMenuTouch = this._handleMenuTouch.bind(this);
  }

  _handleMenuTouch(): void {
    this.props.dispatch(gotoSettingsAction());
  }

  _title(): string {
    switch (router.getCurrentPathname()) {
      case '/ui/project':
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
        <MainAppBar onBackTouch={router.goBack} onMenuTouch={this._handleMenuTouch} title={this._title()}/>

        <RouteHandler/>
      </div>
    );
  }
}

UI.propTypes = {
  dispatch: React.PropTypes.func,
  title: React.PropTypes.string
};


export default connect(UIPageSelector)(UI);
