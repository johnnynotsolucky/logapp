/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import faker from 'faker';

import Task from '../../../app/components/tasks/Task';
import TaskDates from '../../../app/components/tasks/TaskDates';
import TaskTimeElapsed from '../../../app/components/tasks/TaskTimeElapsed';

describe('components/tasks/<Task />', () => {
  const taskOptions = {
    task: {
      text: faker.lorem.sentence(),
    },
  };

  const wrapper = shallow(<Task {...taskOptions} />);

  it('renders a <TaskDates /> component', () => {
    const taskDates = wrapper.find(TaskDates);
    assert.equal(taskDates.length, 1);
  });

  it('renders a <TaskTimeElapsed /> component', () => {
    const timeElapsed = wrapper.find(TaskTimeElapsed);
    assert.equal(timeElapsed.length, 1);
  });

  it('does not render the task options toggle', () => {
    const toggle = wrapper.find('.task_options');
    assert.equal(toggle.length, 0);
  });

  it('renders the task options toggle', () => {
    const options = {
      toggleOptions: sinon.spy(),
      task: {
        text: faker.lorem.sentence(),
      },
    };

    const taskWrapper = shallow(<Task {...options} />);
    const toggle = taskWrapper.find('.task_options');
    assert.equal(toggle.length, 1);
  });

  it('calls the task options toggle callback', () => {
    const options = {
      toggleOptions: sinon.spy(),
      task: {
        text: faker.lorem.sentence(),
      },
    };

    const taskWrapper = shallow(<Task {...options} />);
    const toggle = taskWrapper.find('.task_options');
    toggle.simulate('click');
    assert.equal(options.toggleOptions.calledOnce, true);
  });

  it('renders the correct task text', () => {
    const text = wrapper.find('.task_title');
    assert.equal(text.text(), taskOptions.task.text);
  });
});
