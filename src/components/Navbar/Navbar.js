import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="NavbarContainer">
          <a className="Vicki" href="/">
            Vicki Lei
          </a>
          <div className="LinksContainer">
            <div className="NavLinkContainer">
              <a className="NavLink" href="/#/about">
                about
              </a>
            </div>
            <div className="NavLinkContainer">
              <Link smooth to="/#work" className="NavLink">
                work
              </Link>
            </div>
            <div className="NavLinkContainer">
              <a
                className="NavLink"
                href="https://dribbble.com/vickilei"
                target="_blank"
              >
                play
              </a>
            </div>
            {/* <div className="NavLinkContainer">
              <a className="NavLink" href="/">
                resume
              </a>
            </div> */}
            <div className="NavLinkContainer">
              <Link smooth to="/#contact" className="NavLink">
                contact
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;
