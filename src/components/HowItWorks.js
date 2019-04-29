import React from 'react';
import StandardLanding from "./StandardLanding";
import StandardPageView from "./StandardPageView";
import Prices from "./Prices";
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
        <Prices />
      </div>
    );
}

export default HowItWorks;
