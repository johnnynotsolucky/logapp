import { Meteor } from 'meteor/meteor';
import React from 'react';

import Header from '../components/Header';
import NewTask from '../components/NewTask';

import style from './AppStyle';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.app_body}>
        <div className={style.container}>
          <Header />
          <div className={style.main_body}>
            <NewTask />
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
