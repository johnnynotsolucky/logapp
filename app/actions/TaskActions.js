import alt from '../alt';
import random from 'meteor-random';

class TaskActions {
  newTask(taskDetails) {
    return {
      id: random.id(),
      details: taskDetails,
    };
  }
}

export default alt.createActions(TaskActions);