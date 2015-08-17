/* @flow */

import React from 'react';
import {Styles} from 'material-ui';
import ProjectDashboard from './project-dashboard';



var {Colors} = Styles;

class ProjectDashboardList extends React.Component {
  render(): React.Element {
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

    var projects = [
      {
        id: 1,
        color: Colors.red500,
        barData,
        areaData,
        projectStatus: 40,
        projectTime: 60,
        title: 'پروژه‌ی ایکس'
      },
      {
        id: 2,
        color: Colors.yellow500,
        barData,
        areaData,
        projectStatus: 45,
        projectTime: 52,
        title: 'پروژه‌ی شرکت دبلیو'
      },
      {
        id: 3,
        color: Colors.green500,
        barData,
        areaData,
        projectStatus: 70,
        projectTime: 62,
        title: 'پروژه‌ی شرکت زد'
      },
    ];

    var list = projects.map(
      proj => <ProjectDashboard
                key={proj.id}
                project={proj}
                style={{marginBottom: '6px'}}/>
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}


export default ProjectDashboardList;
