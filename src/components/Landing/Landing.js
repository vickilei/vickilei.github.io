import React, { Component } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { Fade } from "react-awesome-reveal";

import "./Landing.css";

import computer from "./computer.png";
import cat from "./cat.png";

class Landing extends Component {
  typistText = [
    "student at UC Berkeley.",
    "designer and developer.",
    "cat mom and plant enthusiast.",
  ];

  render() {
    return (
      <Fade>
        <div className="LandingContainer">
          <div className="LandingText">
            <h1 className="Hi">Hi there! I am a</h1>
            <TypistLoop interval={900}>
              {this.typistText.map((text) => (
                <Typist
                  key={text}
                  cursor={{
                    show: false,
                    hideWhenDone: true,
                    hideWhenDoneDelay: 0,
                  }}
                  startDelay={300}
                >
                  <h1 className="Hi">{text}</h1>
                  <Typist.Backspace count={25} delay={650} />
                </Typist>
              ))}
            </TypistLoop>
          </div>
          <div className="landingImage">
            <img src={computer} className="Computer" />
            <img src={cat} className="Cat" />
          </div>
        </div>
      </Fade>
    );
  }
}

export default Landing;
