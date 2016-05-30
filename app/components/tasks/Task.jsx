import React from 'react';

import TaskDates from './TaskDates.jsx';
import TaskTimeElapsed from './TaskTimeElapsed.jsx';

export default class Task extends React.Component {

  renderTaskOptionsToggle() {
    const { toggleOptions } = this.props;

    if (!!toggleOptions) {
      return (
        <a className="task_options" onClick={toggleOptions}>
          <i className="material-icons">more_vert</i>
        </a>
      );
    }

    return null;
  }

  render() {
    const { task } = this.props;

    return (
      <div className="task_item">
        <div className="task_details">
          <div className="task_title">
            {task.text}
          </div>
          <div className="task_parameters">
            <TaskDates startedAt={task.startedAt} endedAt={task.endedAt} />
          </div>
        </div>
        <TaskTimeElapsed startedAt={task.startedAt} endedAt={task.endedAt} />
        {this.renderTaskOptionsToggle()}
      </div>
    );
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  toggleOptions: React.PropTypes.func,
};
