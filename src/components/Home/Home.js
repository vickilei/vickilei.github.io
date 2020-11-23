import React, { Component } from "react";

import "./Home.css";

import Landing from "../Landing/Landing";
import Work from "../Work/Work";

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <div id="work">
          <Work />
        </div>
      </div>
    );
  }
}

export default Home;
