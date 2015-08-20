/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {AppBar, CircularProgress} from 'material-ui';
import {MainAppBarSelector} from '../selectors';



class MainAppBar extends React.Component {
  render(): React.Element {
    var loadingIcon;
    if (this.props.loading) {
      loadingIcon = <CircularProgress color='white' size={0.5}/>;
    }
    else {
      loadingIcon = <CircularProgress mode='determinate' size={0.5} value={0}/>;
    }

    return (
      <div style={{height: 100}}>
        <AppBar
          iconElementRight={loadingIcon}
          onLeftIconButtonTouchTap={this.props.menu}
          showMenuIconButton={!!localStorage.getItem('loggedIn')}
          style={{
            direction: 'ltr',
            position: 'fixed'
          }}
          title={this.props.title}
          zDepth={0}
        />
      </div>
    );
  }
}

MainAppBar.propTypes = {
  loading: React.PropTypes.bool,
  menu: React.PropTypes.func,
  title: React.PropTypes.string
};


export default connect(MainAppBarSelector)(MainAppBar);
