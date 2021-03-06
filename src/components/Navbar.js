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
  onClickBurgerTop() {
    /* Need to add the active class on the hamburger */
    if (!this.state.hamburgerClicked) this.setState({ hamburgerClicked: true });
    else this.setState({ hamburgerClicked: false });

    window.scrollTo(0, 0);
  }

  onClickBurger() {
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
          <NavLink exact to="/" className="navbar-item logo-dimensions"><img src="/assets/images/logo/logo.png" className="jl-logo"/></NavLink>

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
              onClick={() => this.onClickBurgerTop()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => this.onClickBurgerTop()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/how-it-works"
            >
              How It Works
            </NavLink>

            <NavLink
              onClick={() => this.onClickBurgerTop()}
              exact
              className="navbar-item mobile-show"
              activeClassName="jl-active"
              to="/faq"
            >
              FAQ
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <span className="nav-social-icons navbar-item mobile-show">
                <a href="https://www.facebook.com/JesterLineGT/"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/jesterlinegt/"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/JesterLineGT"><i className="fab fa-twitter-square"></i></a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
