import { Meteor } from 'meteor/meteor';

import { Tasks } from '../tasks.js';

Meteor.publish('tasks.forUser', (userId)  => Tasks.find({ userId }));
