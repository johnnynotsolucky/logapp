import React from 'react';

import Task from './Task'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className='task_list_container'>
        <ul className='task_filter'>
          <li></li>
          <li className='current'><a>Today</a></li>
          <li><a>Previous</a></li>
        </ul>
        <ul className='task_list'>
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
