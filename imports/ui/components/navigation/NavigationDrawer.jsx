import React from 'react';

import classnames from 'classnames';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem';

export default class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navScreenClasses = classnames('nav_screen', { 'nav_drawer_open': this.props.open});
    const navDrawerClasses = classnames('nav_drawer', { 'nav_drawer_open': this.props.open});

    return (
      <div>
        <div className={navScreenClasses} onClick={this.props.toggleNavDrawer}></div>
        <div className={navDrawerClasses}>
          <div className='app_title'>
            <h1>
              LogApp
            </h1>
            <a className='close_nav_drawer'>
              <i className='material-icons' onClick={this.props.toggleNavDrawer}>close</i>
            </a>
          </div>
          <NavigationItems>
            <NavigationItem title='Username' icon='arrow_drop_down'>
              <NavigationItems secondary={true}>
                <NavigationItem title='Account' icon='account_circle' secondary={true}  to='/account'/>
                <NavigationItem title='Sign Out' icon='lock' secondary={true} to='/signout' />
              </NavigationItems>
            </NavigationItem>
            <NavigationItem title='Dashboard' icon='assessment' to='/dashboard' />
            <NavigationItem title='Projects' icon='assignment' to='/projects' />
            <NavigationItem title='Invoices' icon='payment' to='/invoices' />
            <NavigationItem empty={true} />
            <NavigationItem title='Settings' icon='settings' to='/settings' />
          </NavigationItems>
        </div>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  open: React.PropTypes.bool,
  toggleNavDrawer: React.PropTypes.func.isRequired,
};

NavigationDrawer.contextTypes = {
  router: React.PropTypes.object,
};
