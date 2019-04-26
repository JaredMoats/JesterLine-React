import React, { Component } from 'react';
import StandardHeader from "./StandardHeader";

class HowItWorks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className="standard-page-container">
        <StandardHeader
          imageURL="/assets/images/page-images/how-it-works.jpg"
          headerTitle="How It Works"
        />
      </div>
    );
  }
}

export default HowItWorks;
