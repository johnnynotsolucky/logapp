import React from 'react';

export default class TaskTimeElapsed extends React.Component {
  getEndedAtDate(endedAt) {
    let end = endedAt;
    if (!!!end) {
      end = new Date();
    }

    return end;
  }

  calculateDifference(start, end) {
    return end.valueOf() - start.valueOf();
  }

  parseMillis(millis) {
    let hours = parseInt((millis / (1000 * 60 * 60)) % 24, 10);
    let minutes = parseInt((millis / (1000 * 60)) % 60, 10);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  }

  generateTimeElapsedString() {
    const { startedAt } = this.props;
    const endedAt = this.getEndedAtDate(this.props.endedAt);
    const difference = this.calculateDifference(startedAt, endedAt);
    return this.parseMillis(difference);
  }

  render() {
    return (
      <div className="task_time_elapsed">
        {this.generateTimeElapsedString()}
      </div>
    );
  }
}

TaskTimeElapsed.propTypes = {
  startedAt: React.PropTypes.object.isRequired,
  endedAt: React.PropTypes.object,
};
