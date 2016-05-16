import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Task from './Task';

describe('components/tasks/<Task />', function () {
  const wrapper = shallow(<Task />);
  
  it('renders with the options menu closed', function() {
    assert.equal(wrapper.find('.hidden').length, 1);
  });
  
  it('toggles the options menu', function() {
    
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