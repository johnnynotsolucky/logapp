import React from 'react';

import classnames from 'classnames';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem';

import style from './NavigationDrawerStyle';

export default class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navScreenClasses = classnames(style.nav_screen, { [`${style.nav_drawer_open}`]: this.props.open});
    const navDrawerClasses = classnames(style.nav_drawer, { [`${style.nav_drawer_open}`]: this.props.open});

    return (
      <div>
        <div className={navScreenClasses} onClick={this.props.toggleNavDrawer}></div>
        <div className={navDrawerClasses}>
          <div className={style.app_title}>
            <h1>
              LogApp
            </h1>
            <a className={style.toggle_nav_drawer}>
              <i className="material-icons" onClick={this.props.toggleNavDrawer}>close</i>
            </a>
          </div>
          <NavigationItems>
            <NavigationItem title='Username' icon='arrow_drop_down'>
              <NavigationItems secondary={true}>
                <NavigationItem title='Account' icon='account_circle' secondary={true} />
                <NavigationItem title='Sign Out' icon='lock' secondary={true} />
              </NavigationItems>
            </NavigationItem>
            <NavigationItem title='Dashboard' icon='assessment' />
            <NavigationItem title='Projects' icon='assignment' />
            <NavigationItem title='Invoices' icon='payment' />
            <NavigationItem empty={true} />
            <NavigationItem title='Settings' icon='settings' />
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
