/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import NavigationItems from './NavigationItems';

describe('components/navigation/<NavigationItems />', () => {
  it('renders a navigation items container', () => {
    const wrapper = shallow(<NavigationItems />);
    assert.equal(wrapper.find('.nav_items').length, 1);
  });

  it('renders a navigation items container with children', () => {
    const wrapper = shallow(<NavigationItems><div></div></NavigationItems>);
    assert.equal(wrapper.find('.nav_items').children().html(), '<div></div>');
  });

  it('renders a secondary navigation items container', () => {
    const wrapper = shallow(<NavigationItems secondary />);
    assert.equal(wrapper.find('.nav_items.secondary').length, 1);
  });

  it('renders a secondary navigation items container with children', () => {
    const wrapper = shallow(<NavigationItems secondary><div></div></NavigationItems>);
    assert.equal(wrapper.find('.nav_items.secondary').length, 1);
    assert.equal(wrapper.find('.nav_items').children().html(), '<div></div>');
  });
});
