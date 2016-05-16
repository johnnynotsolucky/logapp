import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Tasks from './Tasks';
import NewTask from '../components/tasks/NewTask';
import TaskList from '../components/tasks/TaskList';

describe('pages/<Tasks />', function () {
  const wrapper = shallow(<Tasks />);
  
  it('renders the <NewTask /> component', function() {
    assert.equal(wrapper.find(NewTask).length, 1);
  });
  
  it('renders the <TaskList /> component', function() {
    assert.equal(wrapper.find(TaskList).length, 1);
  });
});