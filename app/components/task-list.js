/* @flow */

import React from 'react';
import Task from './task'



class TaskList extends React.Component {
  render(): React.Element {
    var tasks = this.props.tasks.map(
      task => <Task
                onJobFinish={() => this.props.onJobFinish(task)}
                task={task}/>
    );

    return (
      <div>
        {tasks}
      </div>
    );
  }
}

TaskList.propTypes = {
  onJobFinish: React.PropTypes.func,
  tasks: React.PropTypes.array
};

export default TaskList;
