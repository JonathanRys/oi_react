import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Route path="/" component={Content} />
        </Router>
      </div>
    )
  }
}

export default App
