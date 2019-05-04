import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "../css/Navbar.css";

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
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item logo-dimensions"><img src="/assets/images/logo/logo.png" className="jl-logo"/></a>

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
            <NavLink
              onClick={() => this.onClickBurger()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => this.onClickBurger()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/how-it-works"
            >
              How It Works
            </NavLink>

            <NavLink
              onClick={() => this.onClickBurger()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/faq"
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
