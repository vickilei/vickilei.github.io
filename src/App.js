import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
        <div id="contact">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
