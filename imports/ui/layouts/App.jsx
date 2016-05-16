import { Meteor} from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import NavigationDrawer from '../components/navigation/NavigationDrawer';
import Header from '../components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      navDrawerOpen: false,
    }
    
    this.toggleNavDrawer = this.toggleNavDrawer.bind(this);
  }
  
  toggleNavDrawer() {
    let { navDrawerOpen } = this.state;
    navDrawerOpen = !navDrawerOpen;
    this.setState({navDrawerOpen});
  }

  render() {
    return (
      <div className='app_body'>
        <div className='container'>
          <NavigationDrawer toggleNavDrawer={this.toggleNavDrawer} open={this.state.navDrawerOpen} />
          <div className='page'>
            <Header toggleNavDrawer={this.toggleNavDrawer} navDrawerOpen={this.state.navDrawerOpen} />
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export { App };

App.propTypes = {

};

App.contextTypes = {
  router: React.PropTypes.object,
};

export default createContainer(() => {
  return {
    connected: Meteor.status().connected,
  };
}, App);