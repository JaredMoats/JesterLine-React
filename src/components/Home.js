import React from 'react';
import Landing from "./Landing";
import SectionHeading from "./SectionHeading";
import GamesList from "./GamesList";
import Prices from "./Prices";
import Footer from "./Footer";

const Home = () => {
  return(
    <div>
      <Landing />
      <GamesList />
      <Prices />
      <Footer />
    </div>
  );
}

export default Home;
