import React, { Component } from 'react';

import NavBar from "../NavBar/NavBar"
import Content from "../Content/Content"

import "./styles.css"

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
