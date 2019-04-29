import React from 'react';
import StandardLanding from "./StandardLanding";
import StandardPageView from "./StandardPageView";
import pageContent from "./../data/faqText";

const Faq = () => {
    return(
      <div className="standard-page-container">
        <StandardLanding
          imageURL="/assets/images/page-images/faq.jpg"
          headerTitle="Frequently Asked Questions"
        />
        <StandardPageView
          pageContent={ pageContent }
        />
      </div>
    );
}

export default Faq;
