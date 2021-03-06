import React from 'react';

import falsy from 'falsy';
import preventDefault from 'prevent-default-wrapper';

import TaskActions from '../../actions/TaskActions';

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: '',
    };

    this.handleTaskTextChanged = this.handleTaskTextChanged.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  handleTaskTextChanged(e) {
    this.setState({ taskText: e.target.value });
  }

  createTask() {
    const { taskText } = this.state;

    if (!falsy(taskText, { ws: true })) {
      TaskActions.newQuickTask(taskText);
    }

    this.setState({ taskText: '' });
  }

  render() {
    const inputProps = {
      value: this.state.taskText,
      onChange: this.handleTaskTextChanged,
    };

    return (
      <section className="new_task_container">
        <form onSubmit={preventDefault(this.createTask)}>
          <div className="new_task">
            <input placeholder="What are you working on?" {...inputProps} />
          </div>
          <button type="submit" className="new_task_button">
            <div>
              <div className="new_task_button_title">
                <i className="material-icons">play_arrow</i>
              </div>
            </div>
          </button>
        </form>
      </section>
    );
  }
}

export default NewTask;
