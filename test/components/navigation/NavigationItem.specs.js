/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import { Link } from 'react-router';
import NavigationItem from '../../../app/components/navigation/NavigationItem';

describe('components/navigation/<NavigationItem />', () => {
  it('renders a plain navigation item', () => {
    const props = {
      title: '',
      icon: '',
      to: '',
    };

    const wrapper = shallow(<NavigationItem {...props} />);
    const link = wrapper.find(Link).render();
    assert.equal(link.children('span').text(), props.title);
    assert.equal(link.children('i').text(), props.icon);
    assert.equal(wrapper.find('.secondary').length, 0);
    assert.equal(wrapper.find('.empty_nav_item').length, 0);
    assert.equal(wrapper.find('.sub_nav_items').length, 0);
  });

  it('renders an empty navigation item', () => {
    const props = {
      empty: true,
    };

    const wrapper = shallow(<NavigationItem {...props} />);
    assert.equal(wrapper.find('.empty_nav_item').length, 1);
    assert.equal(wrapper.find(Link).length, 0);
    assert.equal(wrapper.find('.secondary').length, 0);
    assert.equal(wrapper.find('.sub_nav_items').length, 0);
  });

  it('renders a navigation item with children', () => {
    const props = {
      title: '',
      icon: '',
    };

    const wrapper = shallow(<NavigationItem {...props}><div></div></NavigationItem>);
    const link = wrapper.find('.nav_item');
    assert.equal(link.children('span').text(), props.title);
    assert.equal(link.children('i').text(), props.icon);
    assert.equal(wrapper.find('.secondary').length, 0);
    assert.equal(wrapper.find('.empty_nav_item').length, 0);
    assert.equal(wrapper.find('.sub_nav_items').length, 1);
    assert.equal(wrapper.find('.sub_nav_items').children().html(), '<div></div>');
  });

  it('renders a plain secondary navigation item', () => {
    const props = {
      title: '',
      icon: '',
      to: '',
      secondary: true,
    };

    const wrapper = shallow(<NavigationItem {...props} />);
    const link = wrapper.find(Link).render();
    assert.equal(link.children('span').text(), props.title);
    assert.equal(link.children('i').text(), props.icon);
    assert.equal(wrapper.find('.secondary').length, 1);
    assert.equal(wrapper.find('.empty_nav_item').length, 0);
    assert.equal(wrapper.find('.sub_nav_items').length, 0);
  });

  it('toggles sub items visibility', () => {
    const props = {
      title: '',
      icon: '',
    };

    const wrapper = shallow(<NavigationItem {...props}><div></div></NavigationItem>);
    const link = wrapper.find('.nav_item');
    assert.equal(wrapper.state().subItemsOpen, false);
    assert.equal(wrapper.find('.sub_nav_items.open').length, 0);

    link.simulate('click');
    wrapper.update();
    assert.equal(wrapper.state().subItemsOpen, true);
    assert.equal(wrapper.find('.sub_nav_items.open').length, 1);

    link.simulate('click');
    wrapper.update();
    assert.equal(wrapper.state().subItemsOpen, false);
    assert.equal(wrapper.find('.sub_nav_items.open').length, 0);
  });
});
