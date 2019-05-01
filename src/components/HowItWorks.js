import React from 'react';
import StandardLanding from "./StandardLanding";
import StandardPageView from "./StandardPageView";
import Prices from "./Prices";
import Footer from "./Footer";
import pageContent from "./../data/howItWorksText";

const HowItWorks = () => {
    return(
      <div className="standard-page-container">
        <StandardLanding
          imageURL="/assets/images/page-images/how-it-works.jpg"
          headerTitle="How It Works"
          landingId="how-it-works"
        />
        <StandardPageView
          pageContent={ pageContent }
        />
        <Prices />
        <Footer />
      </div>
    );
}

export default HowItWorks;
