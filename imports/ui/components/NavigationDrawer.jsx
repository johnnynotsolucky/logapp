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
            <h1>
              LogApp
            </h1>
            <a className={style.toggle_nav_drawer}>
              <i className="material-icons" onClick={this.props.toggleNavDrawer}>close</i>
            </a>
          </div>
          <div className={style.nav_items}>
            <a>
              <span>Username</span>
              <i className="material-icons">arrow_drop_down</i>
            </a>
            <a>
              <span>Dashboard</span>
              <i className="material-icons">show_chart</i>
            </a>
            <a>
              <span>Invoices</span>
              <i className="material-icons">payment</i>
            </a>
            <div className={style.empty_item}></div>
            <a>
              <span>Settings</span>
              <i className="material-icons">settings</i>
            </a>
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
