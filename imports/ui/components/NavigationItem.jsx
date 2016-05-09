import { Meteor } from 'meteor/meteor';
import React from 'react';

import style from './NavigationItemStyle';

export default class NavigationItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return !!this.props.empty ? this.renderEmptyItem() : this.renderNavigationItem();
  }
  
  renderNavigationItem() {
    return (
      <a className={style.item}>
        <span>{this.props.title}</span>
        <i className="material-icons">{this.props.icon}</i>
      </a>
    );
  }
  
  renderEmptyItem() {
    return (
      <div className={style.empty_item}></div>
    );
  }
}

NavigationItems.propTypes = {
  empty: React.PropTypes.bool,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
};

NavigationItems.contextTypes = {
  router: React.PropTypes.object,
};
