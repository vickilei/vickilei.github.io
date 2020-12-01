import React, { Component } from "react";

import "./Work.css";

import Project from "../Project/Project";

import tempPic from "./tempPic.png";
import foodshareTemp from "./foodshareTemp.png";
import portfolioTemp from "./portfolioTemp.png";

class Work extends Component {
  render() {
    return (
      <div className="WorkContainer">
        <a
          href="https://www.behance.net/gallery/88856351/FoodShare"
          target="_blank"
        >
          <Project
            projectTitle="FoodShare"
            projectTools="Figma, Adobe Illustrator"
            projectDescription="Designed and iterated on a mobile app that helps college students reduce their food waste by sharing with others."
            projectImage={foodshareTemp}
          />
        </a>
        <a
          href="https://github.com/vickilei/vickilei.github.io"
          target="_blank"
        >
          <Project
            projectTitle="Personal Website"
            projectTools="React, CSS"
            projectDescription="You're looking at it! Built an online portfolio to showcase my projects. This is a perpetual work in progress."
            projectImage={portfolioTemp}
          />
        </a>
        {/* <a>
          <Project
            projectTitle="Project 3"
            projectDescription="This is a brief description of the project."
            projectImage={tempPic}
          />
        </a>
        <a>
          <Project
            projectTitle="Project 4"
            projectDescription="This is a brief description of the project."
            projectImage={tempPic}
          />
        </a> */}
      </div>
    );
  }
}

export default Work;
