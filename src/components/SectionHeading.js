import React from "react";

const SectionHeading = props => {
  return (
    <div className="section-header-container">
      <h1 className="section-header">{props.headerName}</h1>
    </div>
  );
};

export default SectionHeading;
