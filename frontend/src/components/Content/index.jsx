import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
})

function Content(props) {
    const { classes } = props
    return (
        <div style={{ padding: 16 }}>
            <div className={classes.toolbar} />
            Content Component
        </div>
    )
}

export default withStyles(styles)(Content)