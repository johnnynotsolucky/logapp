import React from 'react';

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className='new_task_container'>
        <div className='new_task'>
          <input placeholder="What are you working on?" />
        </div>
        <div className='new_task_button'>
          <div>
            <div className='new_task_button_title'>
              <i className="material-icons">play_arrow</i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

NewTask.propTypes = {
  
};

NewTask.contextTypes = {
  router: React.PropTypes.object,
};
