/* @flow */

import React from 'react';
import {Paper} from 'material-ui';



var styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    direction: 'ltr'
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
      borderRadius: this.props.expand ? 4 : '50%',
      width: this.props.expand ? this.props.expandedWidth : this.props.initialSize,
      height: this.props.expand ? this.props.expandedHeight : this.props.initialSize,
      ...this.props.style
    };

    var iconStyle = {
      ...styles.icon,
      fontSize: `calc(${this.props.initialSize} * 0.45)`
    };

    var icon = (
      <i className='material-icons' style={iconStyle}>
        {this.props.materialIcon}
      </i>
    );

    return (
      <Paper
        onTouchTap={this.props.expand ? null : this.props.onTouchTap}
        style={containerStyle}
        zDepth={2}
      >
        {this.props.expand ? <div>{this.props.children}</div> : icon}
      </Paper>
    );
  }
}

ExpandableButton.propTypes = {
  children: React.PropTypes.node,
  color: React.PropTypes.string,
  expand: React.PropTypes.bool,
  expandedHeight: React.PropTypes.string,
  expandedWidth: React.PropTypes.string,
  initialSize: React.PropTypes.string,
  materialIcon: React.PropTypes.string,
  onTouchTap: React.PropTypes.func,
  style: React.PropTypes.object
};


export default ExpandableButton;
