import { Meteor } from 'meteor/meteor';
import React from 'react';

import classnames from 'classnames';

import NavigationItem from './NavigationItem';

import style from './NavigationItemsStyle';

export default class NavigationItems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const navItemsClass = classnames(style.nav_items, { [`${style.secondary}`]: !!this.props.secondary });
    
    return (
      <div className={navItemsClass}>
        {this.props.children}
      </div>
    );
  }
}

NavigationItems.propTypes = {
  secondary: React.PropTypes.bool,
};

NavigationItems.contextTypes = {
  router: React.PropTypes.object,
};
