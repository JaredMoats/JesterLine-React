import React, { Component } from 'react';
import StandardLanding from "./StandardLanding";
import StandardPageView from "./StandardPageView";

class HowItWorks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="standard-page-container">
        <StandardLanding
          imageURL="/assets/images/page-images/how-it-works.jpg"
          headerTitle="How It Works"
        />
        <StandardPageView />
      </div>
    );
  }
}

export default HowItWorks;
