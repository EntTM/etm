/* @flow */

import React from 'react';
import {BarChart, AreaChart} from 'react-d3-components';
import {CircularProgress, Paper} from 'material-ui';



var styles = {
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginBottom: '0.5vh'
  },
  section: {
    flex: '1 1 50vw'
  }
};

class ProjectDashboard extends React.Component {
  render(): React.Element {
    var {
      barData,
      areaData,
      projectTime,
      projectStatus
    } = this.props.project;

    return (
      <Paper style={styles.main}>
        <div style={styles.section}>
          <div style={styles.progress}>
            زمان پروژه
            <CircularProgress
              mode="determinate"
              style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
              value={projectTime}
            />
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.progress}>
            وضعیت پروژه
            <CircularProgress
              mode="determinate"
              style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
              value={projectStatus}
            />
          </div>
        </div>

        <div style={styles.section}>
          <AreaChart
            data={areaData}
            height={window.innerWidth / 2}
            margin={{top: 10, bottom: 50, left: 30, right: 40}}
            width={window.innerWidth / 2}
          />
        </div>

        <div style={styles.section}>
          <BarChart
            data={barData}
            height={window.innerWidth / 2}
            margin={{top: 10, bottom: 50, left: 30, right: 40}}
            width={window.innerWidth / 2}
          />
        </div>
      </Paper>
    );
  }
}

ProjectDashboard.propTypes = {
  project: React.PropTypes.object,
  style: React.PropTypes.object
};


export default ProjectDashboard;
