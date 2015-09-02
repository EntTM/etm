/* @flow */

import React from 'react';
import {Paper} from 'material-ui';



var styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15vw',
    width: '15vw',
    overflow: 'hidden',
    direction: 'ltr',
    position: 'absolute',
    left: '50%',
    top: '55vh',
    marginLeft: '-7.5vw'
  },
  icon: {
    fontSize: '7.5vw'
  }
};

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(): React.Element {
    return (
      <Paper
        circle={true}
        onTouchTap={this.props.onTouchTap}
        style={{...styles.button, backgroundColor: this.props.color}}
        zDepth={2}
      >
        <i className='material-icons' style={styles.icon}>arrow_forward</i>
      </Paper>
    );
  }
}

ExpandableButton.propTypes = {
  color: React.PropTypes.string,
  onTouchTap: React.PropTypes.func
};


export default ExpandableButton;
