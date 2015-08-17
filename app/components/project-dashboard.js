/* @flow */

import React from 'react';
import {BarChart, AreaChart} from 'react-d3-components';
import {
  Card,
  CardHeader,
  CardText,
  CircularProgress,
  FontIcon,
  Tab,
  Tabs
} from 'material-ui';



class ProjectDashboard extends React.Component {
  getStyles(): Object {
    return {
      progressStyle: {
        display: 'inline-flex',
        flex: '1',
        alignItems: 'center'
      }
    };
  }

  render(): React.Element {
    var styles = this.getStyles();

    var avatar = (
      <FontIcon
        className="material-icons"
        style={{direction: 'ltr'}}
      >
        work
      </FontIcon>
    );

    var {
      title,
      color,
      barData,
      areaData,
      projectTime,
      projectStatus
    } = this.props.project;

    return (
      <Card initiallyExpanded={true} style={this.props.style}>
        <CardHeader
          avatar={avatar}
          showExpandableButton={true}
          style={{paddingRight: '40px'}}
          title={title}/>

        <CardText expandable={true} style={{padding: '0', margin: '0'}}>
          <div style={{display: 'block', textAlign: 'center', backgroundColor: color}}>
            <h5 style={styles.progressStyle}>زمان پروژه
              <CircularProgress
                mode="determinate"
                style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                value={projectTime} />
            </h5>
            <h5 style={styles.progressStyle}>وضعیت پروژه
              <CircularProgress
                mode="determinate"
                style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                value={projectStatus} />
            </h5>
          </div>
          <Tabs style={{direction:'ltr'}}>
            <Tab label="پیشرفت پروژه">
              <AreaChart
                data={areaData}
                height={400}
                margin={{top: 10, bottom: 50, left: 30, right: 40}}
                width={window.innerWidth}/>
            </Tab>
            <Tab label="نمودار میله‌ای">
              <BarChart
                data={barData}
                height={400}
                margin={{top: 10, bottom: 50, left: 30, right: 40}}
                width={window.innerWidth}/>
            </Tab>
          </Tabs>
        </CardText>
      </Card>
    );
  }
}

ProjectDashboard.propTypes = {
  project: React.PropTypes.object,
  style: React.PropTypes.object
};


export default ProjectDashboard;
