/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import NavigationDrawer from './NavigationDrawer';

describe('components/navigation/<NavigationDrawer />', () => {
  const props = {
    open: true,
    toggleNavDrawer: sinon.spy(),
  };

  const wrapper = shallow(<NavigationDrawer {...props} />);

  it('renders closed by default', () => {
    const tmpProps = {
      toggleNavDrawer: sinon.spy(),
    };
    const tmpWrapper = shallow(<NavigationDrawer {...tmpProps} />);
    assert.equal(tmpWrapper.find('.nav_drawer_open').length, 0);
  });

  it('renders open from props', () => {
    assert.equal(wrapper.find('.nav_drawer_open').length, 2);
  });

  it('calls the toggleNavDrawer callback', () => {
    wrapper.find('.close_nav_drawer').simulate('click');
    assert.equal(props.toggleNavDrawer.clickedOnce);
  });
});
