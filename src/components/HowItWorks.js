import React, { Component } from 'react';
import StandardLanding from "./StandardLanding";
import StandardPageView from "./StandardPageView";
import pageContent from "./../data/howItWorksText";

const HowItWorks = () => {
    return(
      <div className="standard-page-container">
        <StandardLanding
          imageURL="/assets/images/page-images/how-it-works.jpg"
          headerTitle="How It Works"
        />
        <StandardPageView
          pageContent={ pageContent }
        />
      </div>
    );
}

export default HowItWorks;
