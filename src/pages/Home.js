import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../svg/logo.svg'
import '../css/logo-animation.css'

const style = {
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

class Home extends Component {
    render() {
        return (
            <header style={style.header}>
                <NavLink to='home' style={style.link}>
                    <h1>John Crane</h1>
                </NavLink>
                <img src={logo} style={style.logo} alt="logo" />
                <p>Interact with the <code>CARLOG</code> database</p>
                <NavLink to='dashboard' style={style.link}>
                    Get Started
                </NavLink>
            </header>
        )
    }
}

export default Home
