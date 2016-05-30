import alt from '../alt';
import random from 'meteor-random';

class TaskActions {
  newQuickTask(text) {
    return {
      id: random.id(),
      startedAt: new Date(),
      completed: false,
      text,
    };
  }

  updateTask(task) {
    return task;
  }

  deleteTask(task) {
    return task;
  }
}

export default alt.createActions(TaskActions);
