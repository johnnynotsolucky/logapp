import { Meteor } from 'meteor/meteor';
import React from 'react';

import style from './HeaderStyle';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className={style.page_header}>
        <a className={style.page_menu}>
          <i className="material-icons">menu</i>
        </a>
        <div className={style.header_title}>logapp</div>
        <a className={style.page_menu}>
          <i className="material-icons">more_vert</i>
        </a>
      </header>
    );
  }
}

Header.propTypes = {

};

Header.contextTypes = {
  router: React.PropTypes.object,
};
