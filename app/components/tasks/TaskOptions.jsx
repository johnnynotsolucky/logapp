import React from 'react';

import classnames from 'classnames';

const TaskOptions = ({ optionsOpen, deleteTask, toggleOptions }) => {
  const optionsClass = classnames('task_options_menu', { hidden: !optionsOpen });

  return (
    <div className={optionsClass}>
      <span></span>
      <a>
        <i className="material-icons">edit</i>
      </a>
      <a onClick={deleteTask}>
        <i className="material-icons">delete</i>
      </a>
      <a>
        <i className="material-icons" onClick={toggleOptions}>close</i>
      </a>
    </div>
  );
};

TaskOptions.propTypes = {
  optionsOpen: React.PropTypes.bool.isRequired,
  deleteTask: React.PropTypes.func.isRequired,
  toggleOptions: React.PropTypes.func.isRequired,
};

export default TaskOptions;
