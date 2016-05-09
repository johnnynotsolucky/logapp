import React from 'react';

import Task from './Task'

import style from './TaskListStyle';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className={style.task_list}>
        <ul className={style.filter}>
          <li></li>
          <li className={style.current}><a>Today</a></li>
          <li><a>Previous</a></li>
        </ul>
        <ul className={style.tasks}>
          <li>
            <Task />
          </li>
          <li>
            <Task />
          </li>
        </ul>
      </section>
    );
  }
}

TaskList.propTypes = {
  
};

TaskList.contextTypes = {
  router: React.PropTypes.object,
};
