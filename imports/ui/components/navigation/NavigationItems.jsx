import React from 'react';

import classnames from 'classnames';

const NavigationItems = (props) => {
  const navItemsClass = classnames('nav_items', { secondary: !!props.secondary });

  return (
    <div className={navItemsClass}>
      {props.children}
    </div>
  );
};

NavigationItems.propTypes = {
  secondary: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
};

NavigationItems.contextTypes = {
  router: React.PropTypes.object,
};

export default NavigationItems;
