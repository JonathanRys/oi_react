import React, { Component } from 'react';

// Use react-router to handle client-side routing
// wrap the app in a Router component

import NavBar from "../NavBar/NavBar"
import Content from "../Content/Content"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Content />
      </div>
    );
  }
}

export default App;
