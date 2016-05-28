/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Task from '../../../../app/components/tasks/Task';

describe('components/tasks/<Task />', () => {
  const wrapper = shallow(<Task />);

  it('renders with the options menu closed', () => {
    assert.equal(wrapper.find('.hidden').length, 1);
  });

  it('toggles the options menu', () => {
    wrapper.instance().toggleOptions();
    wrapper.update();
    assert.equal(wrapper.state().optionsOpen, true);
    assert.equal(wrapper.find('.hidden').length, 0);

    wrapper.instance().toggleOptions();
    wrapper.update();
    assert.equal(wrapper.state().optionsOpen, false);
    assert.equal(wrapper.find('.hidden').length, 1);
  });
});
