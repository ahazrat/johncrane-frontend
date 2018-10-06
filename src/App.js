import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
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
          <NavLink to='home'>Home</NavLink>
          <NavLink to='dashboard'>Dashboard</NavLink>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
