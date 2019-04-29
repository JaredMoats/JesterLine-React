import React from 'react';
import StandardHeading from './StandardHeading';
import './../css/StandardPageView.css';

const StandardPageView = () => {
  return(
    <div className="standard-page-view-container">
      <StandardHeading
        headingTitle = "One of a Kind"
      />
      <p>There’s nothing like JesterLine in West Virginia, so we figured
you might have questions about how your time here will work. </p>
    </div>
  );
}

export default StandardPageView;
