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
  }

  componentDidMount() {
    this.startClock();
  }

  startClock() {
    setInterval(this.increment, 1000);
  }

  increment() {
    let newTime = this.state.secs + 1;
    this.setState({secs: newTime});
  }

  render() {


    return(
      <div>
        <div>
          React is up and running!
        </div>
        <div>
          {this.state.hours}:{this.state.mins}:{this.state.secs}
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
