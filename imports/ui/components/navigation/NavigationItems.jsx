import React from 'react';

import classnames from 'classnames';

export default class NavigationItems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const navItemsClass = classnames('nav_items', {'secondary': !!this.props.secondary });
    
    return (
      <div className={navItemsClass}>
        {this.props.children}
      </div>
    );
  }
}

NavigationItems.propTypes = {
  secondary: React.PropTypes.bool,
};

NavigationItems.contextTypes = {
  router: React.PropTypes.object,
};
