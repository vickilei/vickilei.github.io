import React, { Component } from "react";

import "./Footer.css";

import behance from "./behance.png";
import github from "./github.png";

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="nameContainer">
          <a className="Name">Contact</a>
          <br />
          <div className="contactContainer">
            <a className="Email" href="mailto:vickilei@berkeley.edu">
              vickilei (at) berkeley (dot) edu
            </a>
          </div>
        </div>
        <div className="iconsContainer">
          <a href="https://github.com/vickilei" target="_blank">
            <img className="iconLink" src={github} />
          </a>
          <a href="https://www.behance.net/vickileei" target="_blank">
            <img className="iconLink" src={behance} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
