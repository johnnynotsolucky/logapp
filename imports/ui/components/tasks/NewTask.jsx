import React from 'react';

const NewTask = () => (
  <section className="new_task_container">
    <div className="new_task">
      <input placeholder="What are you working on?" />
    </div>
    <div className="new_task_button">
      <div>
        <div className="new_task_button_title">
          <i className="material-icons">play_arrow</i>
        </div>
      </div>
    </div>
  </section>
);

export default NewTask;
