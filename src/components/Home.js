import React from 'react';
import Landing from "./Landing";
import GamesList from "./GamesList";
import Prices from "./Prices";
import Footer from "./Footer";
import "./../css/Home.css";

const Home = props => {
  return(
    <div className="home">
      <Landing />
      <div className="aboutBlurb">
        <div className="divider"></div>
        <h1>What is JesterLine?</h1>
        <p>
          JesterLine is West Virginia's FIRST high-end eSports and Virtual Reality gaming center.
          We are a safe, family-friendly environment where everyone can experience the best that
          eSports and Virtual Reality has to offer, including local and global tournaments with
          other gamers.
        </p>
        <div className="divider"></div>
      </div>
      <GamesList />
      <Prices />
      <Footer />
    </div>
  );
}

export default Home;
