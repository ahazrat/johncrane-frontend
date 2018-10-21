import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { NavLink, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        width: 150
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Navbar extends React.Component {

    state = {
        auth: true,
        anchorEl: null,
        leftMenu: false,
        tab: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ tab: value })
        this.props.setPage(this.state.tabs[value])
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    toggleLeftMenu = (event) => {
        this.setState(prevState => {
            return {
                leftMenu: !prevState.leftMenu,
                leftMenuAnchor: event.currentTarget
            }
        })
    }

    render() {
        const { classes } = this.props
        const { auth, anchorEl } = this.state
        const open = Boolean(anchorEl)
        const leftMenu = () => {
            return (
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-owns={leftMenu ? 'left-menu' : null}
                    aria-haspopup="true"
                    onClick={this.toggleLeftMenu}>
                    <MenuIcon />
                    <Menu id="left-menu" anchorEl={this.state.leftMenuAnchor} open={this.state.leftMenu} onClick={this.handleClose} >
                        <MenuItem onClick={this.handleClose}>NCR</MenuItem>
                        <MenuItem onClick={this.handleClose}>CofC</MenuItem>
                        <MenuItem onClick={this.handleClose}>CMTR</MenuItem>
                    </Menu>
                </IconButton>
            )
        }
        const nameLogo = () => {
            return (
                <NavLink to='home'>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        John Crane
                    </Typography>
                </NavLink>
            )
        }
        const tabs = () => {
            return (
                <Grid container justify="flex-start">
                    <Tabs value={this.state.tab} style={{float: 'left'}} onChange={this.handleTabChange} >
                        <Tab label='home' to='/home' component={Link} ></Tab>
                        <Tab label='dashboard' to='/dashboard' component={Link} ></Tab>
                        <Tab label='ncr' to='/ncr' component={Link} ></Tab>
                        <Tab label='cofc' to='/cofc' component={Link} ></Tab>
                        <Tab label='cmtr' to='/cmtr' component={Link} ></Tab>
                    </Tabs>
                </Grid>
            )
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {leftMenu()}
                        {null && nameLogo()}
                        {tabs()}
                        {auth && (
                            <div>
                                <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit" >
                                    <AccountCircle />
                                </IconButton>
                                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={this.handleClose} >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
    
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    page: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
}

export default withStyles(styles)(Navbar)