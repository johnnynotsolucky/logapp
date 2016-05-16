/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import { assert } from 'chai';
import { Random } from 'meteor/random';
import faker from 'faker';
import moment from 'moment';
import { _ } from 'meteor/underscore';

import { Tasks } from './tasks.js';

Factory.define('task', Tasks, {
  details: () => faker.lorem.sentence(),
  startedAt: () => moment().toDate(),
});

if (Meteor.isServer) {
  describe('api/Tasks', () => {
    describe('publications', () => {
      let userId;
  
      before(() => {
        userId = Random.id();
          _.times(3, () => {
            Factory.create('task', { userId });
          });
      });
  
      describe('tasks.forUser', () => {
        it('sends all tasks for a user list', () => {
          Meteor.subscribe('tasks.forUser', userId);
          
          Tasks.find({ userId });
          var cursor = Meteor.server.publish_handlers.pages();
          const data = cursor.fetch();
          assert.equals(data.length, 3);
        });
      });
    });
  });
}
