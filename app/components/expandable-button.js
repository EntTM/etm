/* @flow */

import React from 'react';
import {Paper} from 'material-ui';



var styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    direction: 'ltr',
    borderRadius: '50%'
  },
  icon: {
  }
};

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(): React.Element {
    var containerStyle = {
      ...styles.button,
      backgroundColor: this.props.color,
      width: this.props.initialSize,
      height: this.props.initialSize,
      ...this.props.style
    };

    var iconStyle = {
      ...styles.icon,
      fontSize: `calc(${this.props.initialSize} * 0.45)`
    };

    if (this.props.expand) {
      return <div>{this.props.children}</div>;
    }
    else {
      return (
        <Paper
          onTouchTap={this.props.onTouchTap}
          style={containerStyle}
          zDepth={2}
        >
          <i className='material-icons' style={iconStyle}>{this.props.materialIcon}</i>
        </Paper>
      );
    }
  }
}

ExpandableButton.propTypes = {
  children: React.PropTypes.node,
  color: React.PropTypes.string,
  expand: React.PropTypes.bool,
  initialSize: React.PropTypes.string,
  materialIcon: React.PropTypes.string,
  onTouchTap: React.PropTypes.func,
  style: React.PropTypes.object
};


export default ExpandableButton;
