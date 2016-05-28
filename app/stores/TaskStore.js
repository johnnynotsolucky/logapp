import alt from '../alt';

import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = [];
    
    this.bindListeners({
      handleNewTask: TaskActions.NEW_TASK,
    });
  }
  
  handleNewTask(task) {
    console.log(task);
    this.tasks.push(task);
  }
}

export default alt.createStore(TaskStore);