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
      formattedDate = this.DEFAULT_DATE_TEXT;
    } else {
      formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    }

    return formattedDate;
  }

  render() {
    const { startedAt, endedAt } = this.props;

    return (
      <div className="task_parameters_dates">
        <span>{this.renderDateOrDefault(startedAt)}</span>
        <span> - </span>
        <span>{this.renderDateOrDefault(endedAt)}</span>
      </div>
    );
  }
}

TaskDates.propTypes = {
  startedAt: React.PropTypes.object.isRequired,
  endedAt: React.PropTypes.object,
};
