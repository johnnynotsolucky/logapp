import { Meteor } from 'meteor/meteor';
import React from 'react';

import classnames from 'classnames';

import NavigationItems from './NavigationItems';

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
          <NavigationItems />
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
