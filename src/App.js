import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const style = {
  app: {
    textAlign: 'center'
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={style.app}>
          <Route path='/home' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
