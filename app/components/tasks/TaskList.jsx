import React from 'react';

import TaskStore from '../../stores/TaskStore';

import TaskItem from './TaskItem.jsx';

import moment from 'moment';
import _ from 'underscore';

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
    let { tasks } = this.state;
    tasks = _.sortBy(tasks, (t) => moment(t.startedAt).valueOf).reverse();

    return tasks.map((task) =>
      <li key={task.id}>
        <TaskItem task={task} />
      </li>
    );
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
