/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Tasks from '../../app/pages/Tasks';
import NewTask from '../../app/components/tasks/NewTask';
import TaskList from '../../app/components/tasks/TaskList';

describe('pages/<Tasks />', () => {
  const wrapper = shallow(<Tasks />);

  it('renders the <NewTask /> component', () => {
    assert.equal(wrapper.find(NewTask).length, 1);
  });

  it('renders the <TaskList /> component', () => {
    assert.equal(wrapper.find(TaskList).length, 1);
  });
});
