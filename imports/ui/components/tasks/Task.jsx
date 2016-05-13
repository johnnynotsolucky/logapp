import React from 'react';

import classnames from 'classnames';

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
    const optionsClass = classnames('task_options_menu', {'hidden': !optionsOpen});

    return (
      <div className='task_container'>
        <div className='task_item'>
          <div className='task_details'>
            <div className='task_title'>
              Do some arb task
            </div>
            <div className='task_parameters'>
              08/02/2016 06:45 - 08/02/2016 07:45
            </div>
          </div>
          <div className='task_time_elapsed'>
            01:00
          </div>
          <a className='task_options' onClick={this.toggleOptions}>
            <i className='material-icons'>more_vert</i>
          </a>
        </div>
        <div className={optionsClass}>
          <span></span>
          <a>
            <i className='material-icons'>edit</i>
          </a>
          <a>
            <i className='material-icons'>delete</i>
          </a>
          <a>
            <i className='material-icons' onClick={this.toggleOptions}>close</i>
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
