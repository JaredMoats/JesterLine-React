import React, { Component } from "react";

class GamesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="games-list-container">
        <i className="fas fa-desktop jl-red" />
        <i className="fab fa-nintendo-switch" />
        <i className="fab fa-playstation" />
      </div>
    );
  }
}

export default GamesList;
