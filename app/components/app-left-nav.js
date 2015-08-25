/* @flow */

import React from 'react';
import Router from 'react-router';
import {MenuItem, LeftNav, Styles, Avatar} from 'material-ui';
import avatar from '../../images/avatar.png';



var {Colors, Spacing, Typography} = Styles;

var menuItems = [
  {type: MenuItem.Types.SUBHEADER, text: 'فعالیت‌ها'},
  {route: 'project', text: 'فعالیت‌ها'},
  {route: 'dashboard', text: 'داشبورد'},
  {type: MenuItem.Types.SUBHEADER, text: 'تنظیمات'},
  {route: 'settings', text: 'تنظیمات برنامه'},
];

class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  getStyles(): Object {
    return {
      containerStyle: {
        direction: 'rtl'
      },
      headerStyle: {
        backgroundColor: Colors.blueGrey500,
        color: Typography.textFullWhite,
        cursor: 'pointer',
        fontWeight: Typography.fontWeightLight,
        lineHeight: '270px', //Spacing.desktopKeylineIncrement + 'px',
        paddingLeft: Spacing.desktopGutter,
        padding: '0px',
        textAlign: 'center',
        margin: '0px',
        height: '150px',
        backgroundImage: 'url(' + avatar + ')',
        backgroundSize: '256px 150px'
      },
      headerTextStyle: {
        fontSize: '18px',
        padding: '0px',
        margin: '0px',
      }
    };
  }

  toggle(): void {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex(): number {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }

    return -1;
  }

  _onLeftNavChange(e: Object, key: Object, payload: Object): void {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick(): void {
    this.context.router.transitionTo('profile-settings');
    this.refs.leftNav.close();
  }

  render(): React.Element {
    var styles = this.getStyles();
    var header = (
      <div onTouchTap={this._onHeaderClick} style={styles.headerStyle}>
        <p style={styles.headerTextStyle}>example@sample.com</p>
      </div>
    );

    return (
      <LeftNav
        docked={false}
        header={header}
        isInitiallyOpen={false}
        menuItems={menuItems}
        onChange={this._onLeftNavChange}
        ref="leftNav"
        selectedIndex={this._getSelectedIndex()}
        style={styles.containerStyle} />
    );
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

export default AppLeftNav;
