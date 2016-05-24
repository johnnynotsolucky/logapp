import React from 'react';

import classnames from 'classnames';

const Header = (props) => {
  const navDrawerOpen = { nav_drawer_open: props.navDrawerOpen };
  const toggleNavDrawerProps = {
    className: classnames('app_menu_item', 'toggle_nav_drawer', [navDrawerOpen]),
    onClick: props.toggleNavDrawer,
  };

  return (
    <header className="app_header">
      <a {...toggleNavDrawerProps}>
        <i className="material-icons">menu</i>
      </a>
      <div className="header_title">[Project Title]</div>
    </header>
  );
};

Header.propTypes = {
  navDrawerOpen: React.PropTypes.bool.isRequired,
  toggleNavDrawer: React.PropTypes.func.isRequired,
};

export default Header;
