import React from 'react';
import Landing from "./Landing";
import SectionHeading from "./SectionHeading";
import GamesList from "./GamesList.js";

const Home = () => {
  return(
    <div>
      <Landing />
      <SectionHeading headerName="Games" />
      <GamesList />
      <SectionHeading headerName="Prices" />
    </div>
  );
}

export default Home;
