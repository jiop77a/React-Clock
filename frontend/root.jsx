import React from 'react';
import ReactDOM from 'react-dom';




class Root extends React.Component {

  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds()
    };
    this.increment = this.increment.bind(this);
    this.startClock = this.startClock.bind(this);
    this.formatHours = this.formatHours.bind(this);
  }

  componentDidMount() {
    this.startClock();
  }

  startClock() {
    setInterval(this.increment, 1000);
  }

  increment() {
    let newSecs = this.state.secs + 1;
    let newMins = this.state.mins;
    let newHours = this.state.hours;
    if (newSecs >= 60) {
      newSecs = 0;
      newMins++;
    }
    if (newMins >= 60) {
      newMins = 0;
      newHours++;
    }
    if (newHours >= 24) {
      newHours = 0;
    }
    this.setState({
      secs: newSecs,
      mins: newMins,
      hours: newHours
    });
  }

  formatHours(hours) {
    if (hours === 0) {
      return 12;
    } else if (hours > 12) {
      return hours - 12;
    } else {
      return hours;
    }
  }

  render() {
    let meridian = this.state.hours > 12 ? "PM" : "AM";
    let bareHours = this.formatHours(this.state.hours);


    return(
      <div>
        <div>
          React is up and running!
        </div>
        <div>
          {bareHours}:{this.state.mins}:{this.state.secs}{meridian}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
