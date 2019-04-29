import React from 'react';
import Landing from "./Landing";
import SectionHeading from "./SectionHeading";
import GamesList from "./GamesList";
import Prices from "./Prices";

const Home = () => {
  return(
    <div>
      <Landing />
      <GamesList />
      <Prices />
    </div>
  );
}

export default Home;
