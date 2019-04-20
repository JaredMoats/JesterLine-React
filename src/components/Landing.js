import React, { Component } from "react";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>
        West Virginia's <span className="jl-red">first</span> e-Sports
        <br />
        and Virtual Reality Gaming Center
      </h1>
      <div className="button-container">
        <a className="button is-jl-red">Games</a>
        <a className="button is-jl-red">Prices</a>
      </div>
    </div>
  );
};

export default Landing;