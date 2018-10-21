import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NCR from './pages/NCR'
import COFC from './pages/COFC'
import CMTR from './pages/CMTR'

import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

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

  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      auth: null
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(page) {
    console.log(page)
    this.setState({ page: page })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar page={this.state.page} setPage={this.setPage} />
          <div style={style.app}>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/ncr' component={NCR} />
              <Route path='/cofc' component={COFC} />
              <Route path='/CMTR' component={CMTR} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
