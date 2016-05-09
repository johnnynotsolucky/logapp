import { Meteor } from 'meteor/meteor';
import React from 'react';

import NavigationItem from './NavigationItem';

import style from './NavigationItemsStyle';

export default class NavigationItems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div className={style.nav_items}>
        <NavigationItem title='Username' icon='arrow_drop_down' />
        <NavigationItem title='Dashboard' icon='assessment' />
        <NavigationItem title='Projects' icon='assignment' />
        <NavigationItem title='Invoices' icon='payment' />
        <NavigationItem empty={true} />
        <NavigationItem title='Settings' icon='settings' />
      </div>
    );
  }
}

NavigationItems.propTypes = {
  
};

NavigationItems.contextTypes = {
  router: React.PropTypes.object,
};
