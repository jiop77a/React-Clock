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
    this.formatHours = this.formatHours.bind(this);
  }

  componentDidMount() {
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
      return "12";
    } else if (hours > 12 && hours < 22) {
      return "0" + (hours-12).toString();
    } else if (hours >= 22) {
      return hours.toString();
    } else if (hours < 10) {
      return "0" + hours.toString();
    }
  }

  render() {

    let hours = this.state.hours || 0;
    let mins = this.state.mins || 0;
    let secs = this.state.secs || 0;

    let meridian = hours > 12 ? "PM" : "AM";

    hours = this.formatHours(hours).toString();
    mins = (mins < 10) ? `0${mins}` : mins.toString();
    secs = (secs < 10) ? `0${secs}` : secs.toString();

    return(
      <div>
        <div id='welcome'>
          Here is a clock for you!
        </div>
        <div id='clock'>
          {hours}:{mins}:{secs} {meridian}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
