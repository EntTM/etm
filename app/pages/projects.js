/* @flow */

import React from 'react';
import {Snackbar, Styles} from 'material-ui';
import {connect} from 'react-redux';
import Hammer from 'hammerjs';
import debounce from 'debounce';
import Filters from '../components/filters';
import TaskList from '../components/task-list';
import {ProjectsPageSelector} from '../selectors';
import ProjectDashboard from '../components/project-dashboard';
import MainAppBar from '../components/main-app-bar';
import {gotoSettingsAction, selectProjectAction} from '../actions';



var ThemeManager = new Styles.ThemeManager();
var {Colors} = Styles;


class Projects extends React.Component {
  constructor(props: Object) {
    super(props);
    this._handleJobDone = this._handleJobDone.bind(this);
    this._handleSnackbarAction = this._handleSnackbarAction.bind(this);
    this._handleMenuTouch = this._handleMenuTouch.bind(this);
    this._prevProject = debounce(this._prevProject.bind(this), 500, true);
    this._nextProject = debounce(this._nextProject.bind(this), 500, true);
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentDidMount(): void {
    var div = React.findDOMNode(this.refs.body);
    this.mc = new Hammer.Manager(div, {recognizers: [[Hammer.Pan, {direction: Hammer.DIRECTION_HORIZONTAL}]]});
    this.mc.on('panleft', this._prevProject);
    this.mc.on('panright', this._nextProject);
  }

  _nextProject(): void {
    if (this.nextPrj !== null) {
      this.props.dispatch(selectProjectAction(this.nextPrj));
    }
  }

  _prevProject(): void {
    if (this.prevPrj !== null) {
      this.props.dispatch(selectProjectAction(this.prevPrj));
    }
  }

  _handleJobDone(): void {
    this.refs.snackbar.show();
  }

  _handleSnackbarAction(): void {
    this.refs.snackbar.dismiss();
  }

  _filterPastTasks(): void {
    console.log('Filter tasks and show just past Tasks');
  }

  _filterCurrentTasks(): void {
    console.log('Filter tasks and show just current Tasks');
  }

  _filterFutureTasks(): void {
    console.log('Filter tasks and show just future Tasks');
  }

  _handleMenuTouch(): void {
    this.props.dispatch(gotoSettingsAction());
  }

  render(): React.Element {
    var projIds = this.props.projects.map(p => p.id);
    var idx = projIds.indexOf(this.props.currentProjectId);

    var currentProject = this.props.projects[idx];

    if (idx > 0) {
      this.prevPrj = projIds[idx - 1];
    }
    else {
      this.prevPrj = null;
    }

    if (idx < (projIds.length - 1)) {
      this.nextPrj = projIds[idx + 1];
    }
    else {
      this.nextPrj = null;
    }

    var projTaskCounts = this.props.projects.map(p => p.tasks.length);

    return (
      <div ref='body'>
        <Filters
          onCurrentTasks={this._filterCurrentTasks}
          onFutureTasks={this._filterFutureTasks}
          onPastTasks={this._filterPastTasks}
        />

        <Snackbar
          action="لغو"
          autoHideDuration={5000}
          message="فعالیت مورد نظر تمام شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{minWidth: '100px', paddingRight: '0', paddingLeft: '12px'}}
        />

        <MainAppBar
          color={currentProject.color}
          currentProjectIndex={idx}
          onMenuTouch={this._handleMenuTouch}
          projectHeights={projTaskCounts}
          title={currentProject.title}
        />

        <ProjectDashboard
          project={currentProject}
        />

        <TaskList
          onJobFinish={(j) => this._handleJobDone()}
          tasks={currentProject.tasks}
        />
      </div>
    );
  }
}

Projects.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Projects.propTypes = {
  currentProjectId: React.PropTypes.number,
  dispatch: React.PropTypes.func,
  projects: React.PropTypes.array
};


export default connect(ProjectsPageSelector)(Projects);
