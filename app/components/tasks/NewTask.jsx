import React from 'react';

import TaskActions from '../../actions/TaskActions';

class NewTask extends React.Component {
  constructor() {
    super();

    this.createTask = this.createTask.bind(this);
  }

  createTask(e) {
    if (e) {
      e.preventDefault();
    }

    const { newTaskText } = this.refs;
    TaskActions.newQuickTask(newTaskText.value);

    newTaskText.value = '';
  }

  render() {
    return (
      <section className="new_task_container">
        <form onSubmit={this.createTask}>
          <div className="new_task">
            <input ref="newTaskText" placeholder="What are you working on?" />
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
