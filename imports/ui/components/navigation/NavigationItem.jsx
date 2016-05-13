import React from 'react';
import { Link } from 'react-router';

import classnames from 'classnames';

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
    
    return (
      <div>
        { !!children ? this.renderItemWithSubItems() : this.renderItem() }
      </div>
    );
  }
  
  renderItemWithSubItems() {
    const itemClass = classnames('nav_item', { 'secondary': !!this.props.secondary });
    const subItemsClass = classnames('sub_nav_items', {'open': !!this.state.subItemsOpen});
    
    return  (
      <div>
        <a className={itemClass} onClick={this.toggleSubItems}>
          <span>{this.props.title}</span>
          <i className='material-icons'>{this.props.icon}</i>
        </a>
        <div className={subItemsClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
  
  renderItem() {
    const itemClass = classnames('nav_item', { 'secondary': !!this.props.secondary });
    return (
      <Link className={itemClass} onClick={this.toggleSubItems} to={this.props.to}>
        <span>{this.props.title}</span>
        <i className='material-icons'>{this.props.icon}</i>
      </Link>
    );
  }
  
  renderEmptyItem() {
    return (
      <div className='empty_nav_item'></div>
    );
  }
}

NavigationItem.propTypes = {
  empty: React.PropTypes.bool,
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
  secondary: React.PropTypes.bool,
};

NavigationItem.contextTypes = {
  router: React.PropTypes.object,
};
