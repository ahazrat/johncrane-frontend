import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
    },
}

class CMTR extends React.Component {
    state = {
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                CMTR
            </div>
        )
    }
}

CMTR.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CMTR)