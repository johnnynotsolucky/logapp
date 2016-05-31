import React from 'react';

import falsy from 'falsy';

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

  createTask(e) {
    if (e) {
      e.preventDefault();
    }

    const { taskText } = this.state;

    if(!falsy(taskText, { ws: true })) {
      TaskActions.newQuickTask(taskText);
    }

    this.setState({ taskText: '' });
  }

  render() {
    return (
      <section className="new_task_container">
        <form onSubmit={this.createTask}>
          <div className="new_task">
            <input placeholder="What are you working on?" value={this.state.taskText} onChange={this.handleTaskTextChanged} />
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
