import React, { Component } from "react";

import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="ProjectContainer">
        <div className="ProjectContent">
          <img className="ProjectImage" src={this.props.projectImage} />
          <div className="ProjectOverlay">
            <h3 className="ProjectTitle">{this.props.projectTitle}</h3>
            <p className="ProjectTools">
              {this.props.projectTools}
            </p>
            <br />
            <p className="ProjectDescription">
              {this.props.projectDescription}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
