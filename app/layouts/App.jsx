import React from 'react';

import NavigationDrawer from '../components/navigation/NavigationDrawer.jsx';
import Header from '../components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
    };

    this.toggleNavDrawer = this.toggleNavDrawer.bind(this);
  }

  toggleNavDrawer() {
    let { navDrawerOpen } = this.state;
    navDrawerOpen = !navDrawerOpen;
    this.setState({ navDrawerOpen });
  }

  render() {
    const navigationDrawerProps = {
      toggleNavDrawer: this.toggleNavDrawer,
      open: this.state.navDrawerOpen,
    };

    const headerProps = {
      toggleNavDrawer: this.toggleNavDrawer,
      navDrawerOpen: this.state.navDrawerOpen,
    };

    return (
      <div className="app_body">
        <div className="container">
          <NavigationDrawer {...navigationDrawerProps} />
          <div className="page">
            <Header {...headerProps} />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
