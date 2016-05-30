import React from 'react';

import Task from './Task.jsx';
import TaskOptions from './TaskOptions.jsx';

import TaskActions from '../../actions/TaskActions';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsOpen: false,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  toggleOptions() {
    let { optionsOpen } = this.state;
    optionsOpen = !optionsOpen;
    this.setState({ optionsOpen });
  }

  deleteTask() {
    const { task } = this.props;

    TaskActions.deleteTask(task);
  }

  render() {
    const optionsProps = {
      optionsOpen: this.state.optionsOpen,
      deleteTask: this.deleteTask,
      toggleOptions: this.toggleOptions,
    };

    return (
      <div className="task_container">
        <Task task={this.props.task} toggleOptions={this.toggleOptions} />
        <TaskOptions {...optionsProps} />
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: React.PropTypes.object.isRequired,
};
