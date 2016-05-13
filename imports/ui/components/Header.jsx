import React from 'react';

import classnames from 'classnames';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className='app_header'>
        <a className={classnames('app_menu_item', 'toggle_nav_drawer', {'nav_drawer_open': this.props.navDrawerOpen})} onClick={this.props.toggleNavDrawer}>
          <i className="material-icons">menu</i>
        </a>
        <div className='header_title'>&nbsp;</div>
      </header>
    );
  }
}

Header.propTypes = {
  navDrawerOpen: React.PropTypes.bool.isRequired,
  toggleNavDrawer: React.PropTypes.func.isRequired,
};

Header.contextTypes = {
  router: React.PropTypes.object,
};
