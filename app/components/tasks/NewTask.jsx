import React from 'react';

import TaskStore from '../../stores/TaskStore';
import TaskActions from '../../actions/TaskActions';

class NewTask extends React.Component {
  constructor() {
    super();
    this.state = TaskStore.getState();
    
    this.onChange = this.onChange.bind(this);
    this.createTask = this.createTask.bind(this);
    
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
  
  createTask(e) {
    if(e) {
      e.preventDefault();
    }
    
    const { newTaskDetails } = this.refs;
    TaskActions.newTask(newTaskDetails.value);
  }

  render() {
    return (
      <section className="new_task_container">
        <form onSubmit={this.createTask}>
          <div className="new_task">
            <input ref="newTaskDetails" placeholder="What are you working on?" />
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
