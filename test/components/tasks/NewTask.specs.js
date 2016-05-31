/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import _ from 'underscore';
import sinon from 'sinon';
import faker from 'faker';

import NewTask from '../../../app/components/tasks/NewTask';

import TaskActions from '../../../app/actions/TaskActions';

describe('components/tasks/<NewTask />', () => {
  const wrapper = shallow(<NewTask />);

  it('creates a new task', () => {
    sinon.stub(TaskActions, 'newQuickTask');

    wrapper.setState({ taskText: faker.lorem.sentence() });
    const form = wrapper.find('form');
    form.simulate('submit');
    assert.equal(TaskActions.newQuickTask.calledOnce, true);
    
    TaskActions.newQuickTask.restore();
  });
  
  it('does not create a task if the text is falsy', () => {
    sinon.stub(TaskActions, 'newQuickTask');

    const form = wrapper.find('form');
    
    wrapper.setState({ taskText: '' });
    form.simulate('submit');
    assert.equal(TaskActions.newQuickTask.calledOnce, false);
    
    wrapper.setState({ taskText: ' ' });
    form.simulate('submit');
    assert.equal(TaskActions.newQuickTask.calledOnce, false);
    
    wrapper.setState({ taskText: null });
    form.simulate('submit');
    assert.equal(TaskActions.newQuickTask.calledOnce, false);
    
    wrapper.setState({ taskText: undefined });
    form.simulate('submit');
    assert.equal(TaskActions.newQuickTask.calledOnce, false);
    
    TaskActions.newQuickTask.restore();
  });
});
