/* @flow */

import React from 'react';
import {IconButton, FontIcon} from 'material-ui';



var styles = {
  container: {
    direction: 'ltr',
    height: '10vh',
    backgroundColor: '#998E67',
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    alignItems: 'center'
  },
  projTitle: {
    flex: 'none',
    fontWeight: 'normal',
    margin: '0 5vw'
  },
  miniList: {
    flex: '1 1 auto',
    alignSelf: 'stretch',
    backgroundColor: '#999999'
  },
  menu: {
    flex: 'none'
  }
};

class MainAppBar extends React.Component {
  _projTitle(): React.Element {
    return (
      <h1 style={styles.projTitle}>
        {this.props.title}
      </h1>
    );
  }

  _miniList(): React.Element {
    return (
      <div style={styles.miniList}>
      </div>
    );
  }

  _menu(): React.Element {
    return (
      <div
        onTouchTap={this.props.onMenuTouch}
        style={styles.menu}
      >
        <IconButton iconClassName='material-icons'>
          more_vert
        </IconButton>
      </div>
    );
  }

  render(): React.Element {
    return (
      <div style={styles.container}>
        {this._projTitle()}
        {this._miniList()}
        {this._menu()}
      </div>
    );
  }
}

MainAppBar.propTypes = {
  onMenuTouch: React.PropTypes.func,
  title: React.PropTypes.string
};


export default MainAppBar;
