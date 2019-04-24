import React, { Component } from "react";

class GamesCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cards-container">
        {this.props.gameData.map((game, index) =>
          <div className="card game-card" key={index}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={game.boxArt} alt={game.title} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-5 game-title">{game.title}</p>
              <div className="game-divider" />
              <p className="title is-5 game-platform">{game.system}</p>
            </div>
          </div>
        )
      }
      </div>
    );
  }
}

export default GamesCards;
