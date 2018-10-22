import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
    },
}

class Error404 extends React.Component {
    state = {
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                Error404
            </div>
        )
    }
}

Error404.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Error404)