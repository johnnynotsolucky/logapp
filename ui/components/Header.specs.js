/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Header from './Header';

describe('components/<Header />', () => {
  const props = {
    toggleNavDrawer: sinon.spy(),
    navDrawerOpen: false,
  };

  const wrapper = shallow(<Header {...props} />);

  it('calls the toggleNavDrawer callback', () => {
    wrapper.find('.app_menu_item.toggle_nav_drawer').simulate('click');
    assert.equal(props.toggleNavDrawer.clickedOnce);
  });

  it('renders the nav drawer toggle button without the nav_drawer_open css class', () => {
    assert.equal(wrapper.find('.nav_drawer_open').length, 0);
  });

  it('renders the nav drawer toggle button with the nav_drawer_open css class', () => {
    const tmpProps = {
      toggleNavDrawer: sinon.spy(),
      navDrawerOpen: true,
    };
    const tmpWrapper = shallow(<Header {...tmpProps} />);

    assert.equal(tmpWrapper.find('.nav_drawer_open').length, 1);
  });
});
