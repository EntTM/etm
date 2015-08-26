/* @flow */

import React from 'react';
import {IconButton, FontIcon} from 'material-ui';



var styles = {
  container: {
    direction: 'ltr',
    position: 'fixed',
    width: '100%',
    height: '10vh',
    top: 0,
    left: 0,
    zIndex: 1000,
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
    height: '100%'
  },
  miniListItem: {
    display: 'inline-block',
    width: '5vw',
    margin: '1vh 1.5vw',
    borderRadius: 5
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
    var max = Math.max.apply(null, this.props.projectHeights);
    var list = this.props.projectHeights.map(h => h / max)
      .map((h, i) =>
           <div
             key={i}
             style={{
               ...styles.miniListItem,
               height: `calc(${h} * 8vh)`,
               backgroundColor: (i === this.props.currentProjectIndex ? '#ccc' : '#999')
             }}
           />
          );

    return (
      <div style={styles.miniList}>
        {list}
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
      <div style={{...styles.container, backgroundColor: this.props.color}}>
        {this._projTitle()}
        {this._miniList()}
        {this._menu()}
      </div>
    );
  }
}

MainAppBar.propTypes = {
  color: React.PropTypes.string,
  currentProjectIndex: React.PropTypes.number,
  onMenuTouch: React.PropTypes.func,
  projectHeights: React.PropTypes.arrayOf(React.PropTypes.number),
  title: React.PropTypes.string
};


export default MainAppBar;
