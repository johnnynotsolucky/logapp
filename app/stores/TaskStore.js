import alt from '../alt';

import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleNewQuickTask: TaskActions.NEW_QUICK_TASK,
      handleDeleteTask: TaskActions.DELETE_TASK,
    });
  }

  handleNewQuickTask(task) {
    this.tasks.map((t) => {
      const currentTask = t;
      if (!currentTask.completed) {
        currentTask.completed = true;
        currentTask.endedAt = new Date();
      }

      return currentTask;
    });

    this.tasks.push(task);
  }

  handleDeleteTask(task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}

export default alt.createStore(TaskStore);
