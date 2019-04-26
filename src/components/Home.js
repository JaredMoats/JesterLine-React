import React from 'react';
import Landing from "./Landing";
import SectionHeader from "./SectionHeader";
import GamesList from "./GamesList.js";

const Home = () => {
  return(
    <div>
      <Landing />
      <SectionHeader headerName="Games" />
      <GamesList />
      <SectionHeader headerName="Prices" />
    </div>
  );
}

export default Home;
