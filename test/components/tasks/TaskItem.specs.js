/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TaskItem from '../../../app/components/tasks/TaskItem';
import Task from '../../../app/components/tasks/Task';
import TaskOptions from '../../../app/components/tasks/TaskOptions';

import TaskActions from '../../../app/actions/TaskActions';

describe('components/tasks/<TaskItem />', () => {
  const wrapper = shallow(<TaskItem />);

  it('renders a <Task /> component', () => {
    const task = wrapper.find(Task);
    assert.equal(task.length, 1);
  });

  it('renders a <TaskOptions /> component', () => {
    const taskOptions = wrapper.find(TaskOptions);
    assert.equal(taskOptions.length, 1);
  });

  it('renders task options closed by default', () => {
    assert.equal(wrapper.state().optionsOpen, false);
  });

  it('toggles task options open and closed', () => {
    const instance = wrapper.instance();

    instance.toggleOptions();
    assert.equal(wrapper.state().optionsOpen, true);

    instance.toggleOptions();
    assert.equal(wrapper.state().optionsOpen, false);
  });

  it('executes deleteTask action', () => {
    sinon.stub(TaskActions, 'deleteTask');

    const instance = wrapper.instance();
    instance.deleteTask();
    assert.equal(TaskActions.deleteTask.calledOnce, true);

    TaskActions.deleteTask.restore();
  });
});
