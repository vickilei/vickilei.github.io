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
        <a href="https://www.behance.net/gallery/88856351/FoodShare"
            target="_blank">
          <Project
            projectTitle="FoodShare"
            projectDescription="Decreasing Food Waste in College Campuses"
            projectImage={foodshareTemp}
          />
        </a>
        <a href="https://github.com/vickilei/vickilei.github.io"
            target="_blank"> 
          <Project
            projectTitle="Personal Website"
            projectDescription="A Perpetual Work in Progress"
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
