/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {AppBar, CircularProgress} from 'material-ui';
import {MainAppBarSelector} from '../selectors';



class MainAppBar extends React.Component {
  constructor(props: Object) {
    super(props);
    this._handleMenuTap = this._handleMenuTap.bind(this);
  }

  _handleMenuTap(): void {
    console.log(this.props.menu);
    this.props.menu();
  }

  render(): React.Element {
    var loadingIcon;
    if (this.props.loading) {
      loadingIcon = <CircularProgress color='white' size={0.5}/>;
    }
    else {
      loadingIcon = <CircularProgress mode='determinate' size={0.5} value={0}/>;
    }

    return (
      <AppBar
        iconElementRight={loadingIcon}
        onLeftIconButtonTouchTap={this._handleMenuTap}
        showMenuIconButton={!!localStorage.getItem('loggedIn')}
        title={this.props.title}
        zDepth={0}
      />
    );
  }
}

MainAppBar.propTypes = {
  loading: React.PropTypes.bool,
  menu: React.PropTypes.func,
  title: React.PropTypes.string
};


export default connect(MainAppBarSelector)(MainAppBar);
