import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import { App } from './App';

import NavigationDrawer from '../components/navigation/NavigationDrawer';
import Header from '../components/Header';

describe('layouts/<App />', function () {
  const wrapper = shallow(<App />);
  
  it('renders the app layout', function() {
    console.log(wrapper.children().length);
    assert.equal(wrapper.find('.app_body').length, 1);
  })
  
  it('renders the <NavigationDrawer /> component', function() {
    const navDrawer = wrapper.find(NavigationDrawer);

    assert.equal(navDrawer.length, 1);
  });
  
  it('renders the <Header /> component', function() {
    const header = wrapper.find(Header);

    assert.equal(header.length, 1);
  });
  
  it('hides the <NavigationDrawer /> component by default', function() {
    assert.equal(wrapper.state().navDrawerOpen, false);
  });
  
  it('toggles the <NavigationDrawer /> component', function() {
    const instance = wrapper.instance();
    
    instance.toggleNavDrawer();
    assert.equal(wrapper.state().navDrawerOpen, true);
    
    instance.toggleNavDrawer();
    assert.equal(wrapper.state().navDrawerOpen, false);
  });
});