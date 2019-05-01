import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container" id="top">
        <Navbar />
        <MainView />
      </div>
    );
  }
}

export default App;
