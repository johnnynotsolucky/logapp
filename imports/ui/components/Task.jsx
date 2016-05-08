import { Meteor } from 'meteor/meteor';
import React from 'react';

import classnames from 'classnames';

import style from './TaskStyle';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      optionsOpen: false,
    }
    
    this.toggleOptions = this.toggleOptions.bind(this);
  }
  
  toggleOptions() {
    let { optionsOpen } = this.state;
    optionsOpen = !optionsOpen;
    this.setState({ optionsOpen });
  }

  render() {
    const { optionsOpen } = this.state;
    const optionsClass = classnames(style.options, {[`${style.hidden}`]: !optionsOpen});

    return (
      <div className={style.task}>
        <div className={style.item}>
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
          <a className={style.task_options} onClick={this.toggleOptions}>
            <i className="material-icons">more_vert</i>
          </a>
        </div>
        <div className={optionsClass}>
          <span></span>
          <a>
            <i className="material-icons">edit</i>
          </a>
          <a>
            <i className="material-icons">delete</i>
          </a>
          <a>
            <i className="material-icons" onClick={this.toggleOptions}>close</i>
          </a>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  
};

Task.contextTypes = {
  router: React.PropTypes.object,
};
