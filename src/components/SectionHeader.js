import React from "react";

const SectionHeader = props => {
  return (
    <div className="section-header-container">
      <h1 className="section-header">{props.headerName}</h1>
    </div>
  );
};

export default SectionHeader;
