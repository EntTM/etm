/* @flow */

import React from 'react';
import ProjectDashboard from './project-dashboard';



class ProjectDashboardList extends React.Component {
  render(): React.Element {
    var list = this.props.projects.map(
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

ProjectDashboardList.propTypes = {
  projects: React.PropTypes.array
};


export default ProjectDashboardList;
