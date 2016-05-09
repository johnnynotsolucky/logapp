import React from 'react';

import classnames from 'classnames';

import style from './HeaderStyle';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className={style.page_header}>
        <a className={classnames(style.page_menu, style.toggle_nav_drawer)} onClick={this.props.toggleNavDrawer}>
          <i className="material-icons">menu</i>
        </a>
        <div className={style.header_title}>&nbsp;</div>
      </header>
    );
  }
}

Header.propTypes = {
  toggleNavDrawer: React.PropTypes.func.isRequired,
};

Header.contextTypes = {
  router: React.PropTypes.object,
};
