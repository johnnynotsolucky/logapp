import React from 'react';

import classnames from 'classnames';

import NavigationDrawer from '../components/NavigationDrawer';
import Header from '../components/Header';
import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

import style from './AppStyle';

export default class App extends React.Component {
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
            <div className={style.content}>
              <NewTask />
              <TaskList />
            </div>
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
