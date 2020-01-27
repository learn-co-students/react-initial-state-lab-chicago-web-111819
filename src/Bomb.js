import React, {Component} from "react";

export default class Bomb extends Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  textDisplay = () => {
    let secs = this.state.secondsLeft;
    return (secs == 0) ? "Boom!" : (`${secs} seconds left before I go boom!`);
  }

  render() {
    return (
      <div>
        {this.textDisplay()}
      </div>
    );
  }
}


