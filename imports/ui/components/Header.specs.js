import { Meteor } from 'meteor/meteor';
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Header from './Header';

describe('<Header />', function () {
  
  it('renders a <header /> element', function() {
    const props = {
      toggleNavDrawer: sinon.spy(),
      navDrawerOpen: false,
    }
    
    const wrapper = shallow(<Header {...props} />);
    assert.equal(wrapper.find('header').length, 1);
  });
});