import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import Search from '../Search/Search'
import Identify from '../Identify/Identify'
import Options from '../Options/Options'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Content} />
          <Route path="/search" component={Search} />
          <Route path="/identify" component={Identify} />
          <Route path="/options" component={Options} />
        </div>
      </Router>
    )
  }
}

export default App
