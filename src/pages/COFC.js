import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
    },
}

class COFC extends React.Component {
    state = {
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                COFC
            </div>
        )
    }
}

COFC.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(COFC)