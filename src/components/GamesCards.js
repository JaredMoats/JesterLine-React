import React, { Component } from "react";

const GamesCards = props => {
  return (
    <div className="cards-container">
      <div className="card game-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/assets/images/apex-legends.jpg" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5 game-title">Apex Legends</p>
          <div className="game-divider" />
          <p className="title is-5 game-platform">PC</p>
        </div>
      </div>
      <div className="card game-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/assets/images/apex-legends.jpg" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-5 game-title">Apex Legends</p>
            <div className="game-divider" />
            <p className="title is-5 game-platform">PC</p>
          </div>
        </div>
      </div>
      <div className="card game-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/assets/images/apex-legends.jpg" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5 game-title">Apex Legends</p>
          <div className="game-divider" />
          <p className="title is-5 game-platform">PC</p>
        </div>
      </div>
      <div className="card game-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="/assets/images/apex-legends.jpg" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5 game-title">Apex Legends</p>
          <div className="game-divider" />
          <p className="title is-5 game-platform">PC</p>
        </div>
      </div>
    </div>
  );
};

export default GamesCards;
