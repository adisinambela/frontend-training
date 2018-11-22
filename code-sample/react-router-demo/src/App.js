import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./About";
import Topics from "./Topics";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>|<Link to="/about">About</Link>|
          <Link to="/topics">Topics</Link>
          <hr/>
          <Route exact path="/" component={Home} />          
          <Route
            path="/about"
            render={props => <About name="budi" {...props} />}
          />

          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
