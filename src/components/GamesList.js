import React, { Component } from "react";
import GamesLabels from "./GamesLabels";
import GamesCards from "./GamesCards";

class GamesList extends Component {
  constructor(props) {
    super(props);

    /* I want this component to be the source of truth for the
    games that should be displayed */

    /* activeSection will help keep track of 1. what labels need to be red
    and what games need to be displayed */
    this.state = {
      activeSection: "PC"
    };
  }

  render() {
    return (
      <React.Fragment>
        <GamesLabels />
        <GamesCards />
      </React.Fragment>
    );
  }
}

export default GamesList;
