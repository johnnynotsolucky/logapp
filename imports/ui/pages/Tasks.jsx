import React from 'react';

import NewTask from '../components/tasks/NewTask';
import TaskList from '../components/tasks/TaskList';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewTask />
        <TaskList />
      </div>
    );
  }
}

Tasks.propTypes = {

};

Tasks.contextTypes = {
  router: React.PropTypes.object,
};
