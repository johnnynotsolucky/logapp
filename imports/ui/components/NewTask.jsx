import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Velocity } from 'velocity-animate';

import style from './NewTaskStyle';

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }
  
  expandInOut(e) {
    $(e.target).closest('.' + style.new_task_button)
    .velocity({'z-index': 300}, {duration: 0})
    .velocity({ scale: [1.3, 'ease-in-out', 1]}, { duration: 75 })
    .velocity({ scale: [1, 'ease-in-out'] }, { duration: 75 })
    .velocity({'z-index': 0}, {duration: 0});
  }

  render() {

    return (
      <section className={style.flex_row}>
        <div className={style.new_task}>
          <input placeholder="What are you working on?" />
        </div>
        <div className={style.new_task_button} onClick={this.expandInOut}>
          <div>
            <div className={style.start_button_title}>
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
