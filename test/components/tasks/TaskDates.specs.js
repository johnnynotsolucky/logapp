/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import moment from 'moment';

import TaskDates from '../../../app/components/tasks/TaskDates';

describe('components/tasks/<TaskDates />', () => {
  const options = {
    startedAt: new Date(),
  };

  const wrapper = shallow(<TaskDates {...options} />);

  it('renders the correct start date', () => {
    const taskDates = wrapper.find('.task_started_at');
    assert.equal(taskDates.text(), moment(options.startedAt).format('DD/MM/YYYY HH:mm'));
  });

  it('renders the default date text', () => {
    const instance = wrapper.instance();
    const taskDates = wrapper.find('.task_ended_at');
    assert.equal(taskDates.text(), instance.DEFAULT_DATE_TEXT);
  });

  it('renders the correct end date', () => {
    const dateOptions = {
      startedAt: new Date(),
      endedAt: new Date(),
    };

    const dateWrapper = shallow(<TaskDates {...dateOptions} />);
    const taskDates = dateWrapper.find('.task_ended_at');
    assert.equal(taskDates.text(), moment(options.endedAt).format('DD/MM/YYYY HH:mm'));
  });
});
