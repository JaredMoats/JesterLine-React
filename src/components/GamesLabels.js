import React, { Component } from "react";

class GamesLabels extends Component {
  /* I'm not sure if this will be a stateless
  or stateful component yet */
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="games-section-labels-container">
        <div className="icon-name-container">
          <a href="#">
            <i className="fas fa-desktop game-icon game-icon-active" />
            <h1 className="jl-red">PC</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a h ref="#">
            <i className="fas fa-user-astronaut game-icon" />
            <h1>VR</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a href="#">
            <i className="fab fa-nintendo-switch game-icon" />
            <h1>Switch</h1>
          </a>
        </div>
        <div className="icon-name-container icon-margin-zero">
          <a href="#">
            <i className="fab fa-playstation game-icon" />
            <h1>PS4</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default GamesLabels;
