import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Velocity } from 'velocity-animate';

import style from './App';

// import Trianglify from 'trianglify';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    this.animate();
  }

  animate() {
    $('.' + style.start_button)
    .velocity({ scale: [1.3, 'ease-in-out', 0], opacity: [1, 0]}, { duration: 300 })
    .velocity({ scale: [1, 'ease-in-out'] }, { duration: 75 });
  }

  switcheroo(e) {
    $(e.target).closest('.' + style.start_button)
    .velocity({'z-index': 300}, {duration: 0})
    .velocity({ scale: [1.3, 'ease-in-out', 1]}, { duration: 75 })
    .velocity({ scale: [1, 'ease-in-out'] }, { duration: 75 })
    .velocity({'z-index': 0}, {duration: 0});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.setState({dimensions});
  }

  render() {


    const { dimensions } = this.state;

    return (
      <div className={style.app_body}>
        <div className={style.container}>
          <header className={style.page_header}>
            <a className={style.page_menu}>
              <i className="material-icons">menu</i>
            </a>
            <div className={style.header_title}>[Title]</div>
            <a className={style.page_menu}>
              <i className="material-icons">more_vert</i>
            </a>
          </header>
          <div className={style.main_body}>
            <section className={style.task_container}>
              <div className={style.task_details}>
                <input placeholder="What are you working on?" />
              </div>
              <div className={style.start_button} onClick={this.switcheroo}>
                <div>
                  <div className={style.start_button_title}>
                    <i className="material-icons">play_arrow</i>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

App.contextTypes = {
  router: React.PropTypes.object,
};
