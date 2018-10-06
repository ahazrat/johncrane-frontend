import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const style = {
  app: {
    textAlign: 'center'
  },
  navbar: {
    backgroundColor: '#282c34',
  },
  link: {
      color: '#61dafb'
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={style.app}>
          <div style={style.navbar}>
            <NavLink to='home' style={style.link}>Home</NavLink>&nbsp;
            <NavLink to='dashboard' style={style.link}>Dashboard</NavLink>
          </div>
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
