import React from 'react';

import Task from './Task.jsx';

const TaskList = () => (
  <section className="task_list_container">
    <ul className="task_filter">
      <li></li>
      <li className="current"><a>Today</a></li>
      <li><a>Previous</a></li>
    </ul>
    <ul className="task_list">
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </section>
);

export default TaskList;
