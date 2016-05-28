import React from 'react';

import TaskStore from '../../stores/TaskStore';
import TaskActions from '../../actions/TaskActions';

import Task from './Task.jsx';

class TaskList extends React.Component {
  constructor() {
    super();
    this.state = TaskStore.getState();
    
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    TaskStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TaskStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  renderTasks() {
    const { tasks } = this.state;

    return tasks.map((task) => {
      return (
        <li key={task.id}>
          <Task task={task}/>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="task_list_container">
        <ul className="task_filter">
          <li></li>
          <li className="current"><a>Today</a></li>
          <li><a>Previous</a></li>
        </ul>
        <ul className="task_list">
          {this.renderTasks()}
        </ul>
      </section>
    );
  }
}

export default TaskList;
