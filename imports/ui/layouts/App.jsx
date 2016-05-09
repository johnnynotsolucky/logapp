import { Meteor} from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import classnames from 'classnames';

import NavigationDrawer from '../components/navigation/NavigationDrawer';
import Header from '../components/Header';

import style from './AppStyle';

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
      <div className={style.app_body}>
        <div>
        <div className={classnames(style.container, style.flex_row)}>
          <NavigationDrawer toggleNavDrawer={this.toggleNavDrawer} open={this.state.navDrawerOpen} />
          <div className={style.page}>
            <Header toggleNavDrawer={this.toggleNavDrawer} />
            { this.props.children }
          </div>
        </div>
        </div>
      </div>
    );
  }
}

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