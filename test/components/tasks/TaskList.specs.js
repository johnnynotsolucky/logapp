/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import _ from 'underscore';
import moment from 'moment';

import TaskList from '../../../app/components/tasks/TaskList';
import TaskItem from '../../../app/components/tasks/TaskItem';

describe('components/tasks/<TaskList />', () => {
  const wrapper = shallow(<TaskList />);

  it('renders no <TaskItem /> components', () => {
    wrapper.setState({ tasks: [] });
    const tasks = wrapper.find(TaskItem);
    assert.equal(tasks.length, 0);
  });

  it('renders 1 <TaskItem /> component', () => {
    wrapper.setState({ tasks: [{ id: 1 },] });
    const tasks = wrapper.find(TaskItem);
    assert.equal(tasks.length, 1);
  });

  it('renders 30 <TaskItem /> components', () => {
    const tasks = [];
    for(let i = 0; i < 30; i++) {
      tasks.push({ id: i });
    }

    wrapper.setState({ tasks });
    const taskComponents = wrapper.find(TaskItem);
    assert.equal(taskComponents.length, tasks.length);
  });

  it('renders <TaskItem /> components sorted by start date', () => {
    const date = moment();
    const tasks = [];
    for(let i = 0; i < 30; i++) {
      date.subtract(1, 'd');
      tasks.push({ id: i, startedAt: date.toDate() });
    }

    wrapper.setState({ tasks });

    const sorted = _.sortBy(tasks, (t) => moment(t.startedAt).valueOf).reverse();

    const taskComponents = wrapper.find(TaskItem);
    assert.equal(taskComponents.length, tasks.length);

    taskComponents.forEach((component, index) => {
      const task = sorted[index];

      assert.equal(component.props().task.id, task.id);
    });
  });
});
