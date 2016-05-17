/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { assert } from 'chai';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import faker from 'faker';
import { _ } from 'meteor/underscore';
import { denyInsert, denyUpdate, denyRemove } from '../collection-deny-helper.specs';

import { Tasks } from './tasks.js';

describe('api/Tasks', () => {
  const userId = Random.id();

  before(() => {
    if (Meteor.isServer)
      require("./server/publications.js");

    Factory.define('task', Tasks, { 
      description: () => faker.lorem.sentence(),
      startedAt: () => new Date(),
    });
  });

  describe('mutators', () => {
    
    if (Meteor.isServer) {
      before(() => resetDatabase());
    
      it('prevents insert with missing mandatory fields', (done) => {
        Tasks.insert({}, (error) => {
          assert.equal(!!error, true);
          assert.equal(error.invalidKeys.length, 3);
          done();
        });
      });

      it('prevents update with missing mandatory fields', (done) => {
        const task = Factory.create('task', { userId });
        task.description = null;
        task.startedAt = null;
        task.completed = null;
        task.userId = null;

        Tasks.update(task._id, { $set: task }, (error) => {
          assert.equal(!!error, true);
          assert.equal(error.invalidKeys.length, 4);
          done();
        });
      });

      it('inserts a task with required fields', () => {
        const task = Factory.create('task', { userId });

        assert.equal(!!task, true);
        assert.equal(!!task.description, true);
        assert.equal(!!task.startedAt, true);
        assert.notEqual(task.completed, undefined);
        assert.equal(!!task.userId, true);
      });
      
      it('updates a task with required fields', (done) => {
        const task = Factory.create('task', { userId });
        task.description = faker.lorem.sentence();
        task.startedAt = new Date();
        task.completed = false;
        task.userId = userId;
        Tasks.update(task._id, { $set: task }, (error) => {
          assert.equal(error, undefined);
          done();
        });
      });
    }

    if (Meteor.isClient) {
      const fields = {
        description: faker.lorem.sentence(),
        startedAt: new Date(),
        userId,
      };

      it('denies client insert', function(done) {
        denyInsert(Tasks, fields, done);
      });
      
      it('denies client update', function(done) {
        denyUpdate(Tasks, Random.id(), fields, done);
      });
      
      it('denies client remove', function(done) {
        denyRemove(Tasks, Random.id(), done);
      });
    }
  });

  if (Meteor.isServer) {
    describe('publications', () => {
      before(() => resetDatabase());
      
      describe('tasks.forUser', () => {
        before(() => {
          _.times(3, () => {
            Factory.create('task', { userId });
            Factory.create('task', { userId: Random.id() });
          });
        });
  
        it('publishes all tasks for a user', () => {
          const data = Meteor.server
            .publish_handlers['tasks.forUser'](userId)
            .fetch();
  
          assert.equal(data.length, 3);
        });
  
        it('publishes no tasks for users with no assigned tasks', () => {
          const data = Meteor.server
            .publish_handlers['tasks.forUser'](Random.id())
            .fetch();
  
          assert.equal(data.length, 0);
        });
        
        it('publishes no tasks when no user ID is passed through', () => {
          const data = Meteor.server
            .publish_handlers['tasks.forUser']()
            .fetch();
  
          assert.equal(data.length, 0);
        });
      });
    });
  }
});
