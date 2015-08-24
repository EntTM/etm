/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {IconButton, FontIcon} from 'material-ui';
import {MainAppBarSelector} from '../selectors';



var styles = {
  container: {
    direction: 'ltr',
    height: '10vh',
    backgroundColor: '#998E67',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center'
  },
  backButton: {
    flex: 'none'
  },
  projTitle: {
    flex: 'none',
    fontWeight: 'normal'
  },
  miniList: {
    flex: '1 1 auto',
    alignSelf: 'stretch',
    marginLeft: '5vw',
    backgroundColor: '#999999'
  },
  menu: {
    flex: 'none'
  }
};

class MainAppBar extends React.Component {
  _backButton(): React.Element {
    return (
      <div style={styles.backButton}>
        <IconButton iconClassName='material-icons'>
          arrow_back
        </IconButton>
      </div>
    );
  }

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
      <div style={styles.menu}>
        <IconButton iconClassName='material-icons'>
          more_vert
        </IconButton>
      </div>
    );
  }

  render(): React.Element {
    return (
      <div style={styles.container}>
        {this._backButton()}
        {this._projTitle()}
        {this._miniList()}
        {this._menu()}
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
