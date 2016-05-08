import { Meteor } from 'meteor/meteor';
import React from 'react';

import classnames from 'classnames';

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
            LogApp
          </div>
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
