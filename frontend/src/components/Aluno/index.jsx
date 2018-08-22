import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
})

class Aluno extends Component {
    render() {
        const { classes } = this.props
        return (
            <div style={{ padding: 16 }}>
                <div className={classes.toolbar} />
                Aluno Component
            </div>
        )
    }
}

export default withStyles(styles)(Aluno)