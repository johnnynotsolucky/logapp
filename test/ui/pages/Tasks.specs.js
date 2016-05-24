/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Tasks from '../../../ui/pages/Tasks';
import NewTask from '../../../ui/components/tasks/NewTask';
import TaskList from '../../../ui/components/tasks/TaskList';

describe('pages/<Tasks />', () => {
  const wrapper = shallow(<Tasks />);

  it('renders the <NewTask /> component', () => {
    assert.equal(wrapper.find(NewTask).length, 1);
  });

  it('renders the <TaskList /> component', () => {
    assert.equal(wrapper.find(TaskList).length, 1);
  });
});
