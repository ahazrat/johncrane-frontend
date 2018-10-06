import React, { Component } from 'react';
import logo from './svg/logo.svg';
import './css/logo-animation.css';

const style = {
  app: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '10vmin',
  },
  link: {
    color: '#61dafb'
  }
}

class App extends Component {
  render() {
    return (
      <div style={style.app}>
        <header style={style.header}>
          <h1>John Crane</h1>
          <img src={logo} style={style.logo} alt="logo" />
          <p>Interact with the <code>CARLOG</code> database</p>
          <a href="#dashboard" style={style.link}>Get Started</a>
        </header>
      </div>
    );
  }
}

export default App;
