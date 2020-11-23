import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import "./About.css";

import seattleHeadshot from "./seattleHeadshot.png";

class About extends Component {
  render() {
    return (
      <Fade>
        <div className="AboutContainer">
          <img className="Headshot" src={seattleHeadshot}></img>
          <div className="AboutTextContainer">
            <div className="AboutTitle">
              <h2>Nice to meet ya! I'm Vicki. ✌️</h2>
            </div>
            <div className="AboutBody">
              <p className="AboutBlurb">
                I'm currently a senior at UC Berkeley majoring in Data Science
                and Psychology, with a minor in Computer Science. I'm passionate
                about using technology to design solutions that positively
                impact people's lives. This past summer, I was a software
                engineering intern at Fidelity Investments on the Core Brokerage
                Architecture team. On campus, you can find me as a computer
                science mentor with Berkeley ANova.
                <br />
                <br />
                Feel free to reach out about any opportunities! I'd love to
                chat.
              </p>
              <br />
              <h3 className="AboutSubheading">What I've been up to:</h3>
              <ul className="AboutBlurb">
                <li>trying to be a more sustainable human &nbsp;🌱</li>
                <li>playing fetch with my cats &nbsp;🐱</li>
                <li>getting back into sketching and painting &nbsp;🎨</li>
                <li>
                  living vicariously through my character in Animal Crossing:
                  New Horizons (come visit my island @ DA-3735-3312-5483)
                  &nbsp;🎮
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
