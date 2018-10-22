import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Routes } from './Routes'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: null
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }

}

export default App
