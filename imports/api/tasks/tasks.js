import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Tasks = new Mongo.Collection('tasks');

export { Tasks } ;

Tasks.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Tasks.schema = new SimpleSchema({
  description: {
    type: String,
  },
  startedAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
    optional: true,
  },
  completed: {
    type: Boolean,
    defaultValue: false,
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
});

Tasks.attachSchema(Tasks.schema);
