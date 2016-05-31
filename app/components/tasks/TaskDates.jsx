import React from 'react';

import moment from 'moment';

export default class TaskDates extends React.Component {
  constructor(props) {
    super(props);

    this.DEFAULT_DATE_TEXT = 'Ongoing';
  }

  renderDateOrDefault(date) {
    let formattedDate;

    if (!!date) {
      formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    } else {
      formattedDate = this.DEFAULT_DATE_TEXT;
    }

    return formattedDate;
  }

  render() {
    const { startedAt, endedAt } = this.props;

    return (
      <div className="task_parameters_dates">
        <span className="task_started_at">{this.renderDateOrDefault(startedAt)}</span>
        <span> - </span>
        <span className="task_ended_at">{this.renderDateOrDefault(endedAt)}</span>
      </div>
    );
  }
}

TaskDates.propTypes = {
  startedAt: React.PropTypes.object.isRequired,
  endedAt: React.PropTypes.object,
};
