/* @flow */

import React from 'react';
import {BarChart, AreaChart} from 'react-d3-components';
import {
  Card,
  CardHeader,
  CardText,
  CircularProgress,
  FontIcon,
  Styles,
  Tab,
  Tabs
} from 'material-ui';



var {Colors} = Styles;

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

    var {title, projectTime, projectStatus} = {
      projectStatus: 40,
      projectTime: 60,
      title: 'پروژه‌ی ایکس'
    };

    var barData = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];

    var areaData = [
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
      }
    ];

    return (
      <Card initiallyExpanded={true}>
        <CardHeader
          avatar={avatar}
          showExpandableButton={true}
          style={{paddingRight: '40px'}}
          title={title}/>

        <CardText expandable={true} style={{padding: '0', margin: '0'}}>
          <div style={{display: 'block', textAlign: 'center', backgroundColor: Colors.red500}}>
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


export default ProjectDashboard;
