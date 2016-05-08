import { Meteor } from 'meteor/meteor';
import React from 'react';

import style from './TaskStyle';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={style.task}>
        <div className={style.task_details}>
          <div className={style.task_title}>
            Do some arb task
          </div>
          <div className={style.task_parameters}>
            08/02/2016 06:45 - 08/02/2016 07:45
          </div>
        </div>
        <div className={style.task_time_elapsed}>
          01:00
        </div>
        <a className={style.task_options}>
          <i className="material-icons">more_vert</i>
        </a>
      </div>
    );
  }
}

Task.propTypes = {
  
};

Task.contextTypes = {
  router: React.PropTypes.object,
};
