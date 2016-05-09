import React from 'react';

import classnames from 'classnames';

import style from './NavigationItemStyle';

export default class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      subItemsOpen: false,
    }
    
    this.toggleSubItems = this.toggleSubItems.bind(this);
  }
  
  toggleSubItems() {
    let { subItemsOpen } = this.state;
    subItemsOpen = !subItemsOpen;
    this.setState({subItemsOpen});
  }

  render() {
    return !!this.props.empty ? this.renderEmptyItem() : this.renderNavigationItem();
  }
  
  renderNavigationItem() {
    const { children } = this.props;
    const itemClass = classnames(style.item, { [`${style.secondary}`]: !!this.props.secondary });
    const subItemsClass = classnames(style.sub_items, { [`${style.open}`]: !!this.state.subItemsOpen});
    
    return (
      <div>
        <a className={itemClass} onClick={this.toggleSubItems}>
          <span>{this.props.title}</span>
          <i className="material-icons">{this.props.icon}</i>
        </a>
        { !!children ? 
        <div className={subItemsClass}>
          {children}
        </div>
        : null }
      </div>
    );
  }
  
  renderEmptyItem() {
    return (
      <div className={style.empty_item}></div>
    );
  }
}

NavigationItem.propTypes = {
  empty: React.PropTypes.bool,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  secondary: React.PropTypes.bool,
};

NavigationItem.contextTypes = {
  router: React.PropTypes.object,
};
