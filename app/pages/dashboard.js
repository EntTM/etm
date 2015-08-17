/* @flow */

import React from 'react';
import {Styles} from 'material-ui';
import Filters from '../components/filters';
import ProjectDashboardList from '../components/project-dashboard-list';



var ThemeManager = new Styles.ThemeManager();

class Dashboard extends React.Component {
  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _filterPastTasks(): void {
    console.log('Filter projects and show just past Projects');
  }

  _filterCurrentTasks(): void {
    console.log('Filter projects and show just current Projects');
  }

  _filterFutureTasks(): void {
    console.log('Filter projects and show just future Projects');
  }

  render(): React.Element {
    return (
      <div>
        <Filters
          onCurrentTasks={this._filterCurrentTasks}
          onFutureTasks={this._filterFutureTasks}
          onPastTasks={this._filterPastTasks}
        />

        <ProjectDashboardList/>
      </div>
    );
  }
}

Dashboard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Dashboard;
