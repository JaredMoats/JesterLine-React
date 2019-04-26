import React, { Component } from 'react';
import "../css/StandardHeader.css";

class StandardHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const backgroundImage = {
      backgroundImage: 'url(' + this.props.imageURL + ')'
    };

    return(
      <div
        className="header-container"
        style={ backgroundImage }
      >
        <h1>{ this.props.headerTitle }</h1>
      </div>
    );
  }

}

export default StandardHeader;
