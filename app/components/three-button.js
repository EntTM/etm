/* @flow */

import React from 'react';
import {RefreshIndicator, FloatingActionButton} from 'material-ui';



var styles = {
  button: {
    direction: 'ltr',
    display: 'block',
  },
  loading: {
    position: 'relative'
  }
};

class ThreeButton extends React.Component {
  render(): React.Element {
    var loading = (
      <div style={styles.loading}>
        <RefreshIndicator
          left={0}
          size={this.props.size}
          status="loading"
          top={0}
        />
      </div>
    );

    var button = (
      <FloatingActionButton
        backgroundColor={
          this.props.state === 'first' ?
            this.props.firstColor :
            this.props.secondColor
        }
        onTouchTap={this.props.onTouchTap}
        style={{...styles.button, width: this.props.size}}
      >
        <i className='material-icons'>
          {this.props.state === 'first' ?
            this.props.firstIcon :
            this.props.secondIcon
          }
        </i>
      </FloatingActionButton>
    );

    return (
      <div style={this.props.style}>
        {this.props.state === 'loading' ? loading : button}
      </div>
    );
  }
}

ThreeButton.propTypes = {
  firstColor: React.PropTypes.string,
  firstIcon: React.PropTypes.string,
  onTouchTap: React.PropTypes.func,
  secondColor: React.PropTypes.string,
  secondIcon: React.PropTypes.string,
  size: React.PropTypes.string,
  state: React.PropTypes.oneOf(['first', 'second', 'loading']),
  style: React.PropTypes.object
};


export default ThreeButton;
