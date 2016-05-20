/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

import NavigationDrawer from '../components/navigation/NavigationDrawer';
import Header from '../components/Header';

describe('layouts/<App />', () => {
  const wrapper = shallow(<App />);

  it('renders the app layout', () => {
    assert.equal(wrapper.find('.app_body').length, 1);
  });

  it('renders the <NavigationDrawer /> component', () => {
    const navDrawer = wrapper.find(NavigationDrawer);
    assert.equal(navDrawer.length, 1);
  });

  it('renders the <Header /> component', () => {
    const header = wrapper.find(Header);
    assert.equal(header.length, 1);
  });

  it('hides the <NavigationDrawer /> component by default', () => {
    assert.equal(wrapper.state().navDrawerOpen, false);
  });

  it('toggles the <NavigationDrawer /> component', () => {
    const instance = wrapper.instance();

    instance.toggleNavDrawer();
    assert.equal(wrapper.state().navDrawerOpen, true);

    instance.toggleNavDrawer();
    assert.equal(wrapper.state().navDrawerOpen, false);
  });
});
