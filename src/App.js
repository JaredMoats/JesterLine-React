import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import SectionHeader from "./components/SectionHeader";
import GamesList from "./components/GamesList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Landing />
        <SectionHeader headerName="Games" />
        <GamesList />
      </div>
    );
  }
}

export default App;
