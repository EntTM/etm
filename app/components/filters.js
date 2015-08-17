/* @flow */

import React from 'react';
import {FloatingActionButton, FontIcon} from 'material-ui';



class Filters extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {isExpanded: false}
    this._handleFabTouch = this._handleFabTouch.bind(this)
  }

  _handleFabTouch(): void {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  getStyles(): Object {
    return {
      fabStyle: {
        position: 'fixed',
        right: '15px',
        bottom: '24px',
        zIndex: '999',
        direction: 'ltr',
        transition: 'transform 0.2s',
        transitionTimingFunction: 'ease-in'
      },
      filterFabsStyle: {
        position: 'fixed',
        right: '22px',
        bottom: '32px',
        zIndex: '990',
        direction: 'ltr',
        transition: 'bottom 0.2s',
        transitionTimingFunction: 'ease-in',
      }
    };
  }

  render(): React.Element {
    var styles = this.getStyles();
    var fabStyle = {...styles.fabStyle};
    var currentTasksStyle = {...styles.filterFabsStyle};
    var pastTasksStyle = {...styles.filterFabsStyle};
    var futureTasksStyle = {...styles.filterFabsStyle};

    if (this.state.isExpanded) {
      fabStyle.transform = 'rotate(45deg)';
      currentTasksStyle.bottom = '100px';
      pastTasksStyle.bottom = '150px';
      futureTasksStyle.bottom = '200px';
    }

    return (
      <div>
        <FloatingActionButton
          onTouchTap={this._handleFabTouch}
          style={fabStyle}>
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
        <div>
          <FloatingActionButton
            mini={true}
            onTouchTap={this.props.onCurrentTasks}
            style={currentTasksStyle}>
            <FontIcon className="material-icons">play_arrow</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this.props.onPastTasks}
            style={pastTasksStyle}>
            <FontIcon className="material-icons">done</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this.props.onFutureTasks}
            style={futureTasksStyle}>
            <FontIcon className="material-icons">trending_up</FontIcon>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  onCurrentTasks: React.PropTypes.func,
  onFutureTasks: React.PropTypes.func,
  onPastTasks: React.PropTypes.func
};

export default Filters;
