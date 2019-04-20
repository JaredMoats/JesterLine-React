import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerClicked: false
    };
  }

  /* Helps keep track of if the hamburger menu is triggered or not */
  onClickBurger() {
    /* Need to add the active class on the hamburger */
    if (!this.state.hamburgerClicked) this.setState({ hamburgerClicked: true });
    else this.setState({ hamburgerClicked: false });
  }

  render() {
    let transformBurger = "navbar-burger is-active";
    let displayMenuMobile = "navbar-menu is-active";

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">JesterLine</a>

          <a
            role="button"
            className={
              !this.state.hamburgerClicked ? "navbar-burger" : transformBurger
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="jesterline-navbar"
            onClick={() => this.onClickBurger()}
          >
            <span aria-hidden="true" class="burger-white" />
            <span aria-hidden="true" class="burger-white" />
            <span aria-hidden="true" class="burger-white" />
          </a>
        </div>

        <div
          id="jesterline-navbar"
          className={
            !this.state.hamburgerClicked ? "navbar-menu" : displayMenuMobile
          }
        >
          <div className="navbar-start">
            <a className="navbar-item jl-active mobile-show">Home</a>
            <a className="navbar-item mobile-show">How It Works</a>
            <a className="navbar-item mobile-show">
              Frequently Asked Questions
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;