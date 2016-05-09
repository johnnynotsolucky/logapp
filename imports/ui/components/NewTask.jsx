import { Meteor } from 'meteor/meteor';
import React from 'react';

import style from './NewTaskStyle';

export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className={style.flex_row}>
        <div className={style.new_task}>
          <input placeholder="What are you working on?" />
        </div>
        <div className={style.new_task_button}>
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
