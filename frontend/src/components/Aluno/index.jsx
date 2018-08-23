import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

import Header from '../Header'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
})

class Aluno extends Component {
    
    render() {
        const { classes } = this.props
        return (
            <div style={{ padding: 16 }}>
                <div className={classes.toolbar} />
                <Header title='Alunos' />
                <Grid container spacing={16}>
                    {/* <form className={ classes.container }> */}
                        <Grid item sm={6}>
                            <TextField 
                                id='nome' 
                                label='Nome' 
                                className={classes.textField} 
                                margin='normal'
                                fullWidth={true} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField 
                                id='data_nasc' 
                                label='Data de Nascimento' 
                                className={classes.textField} 
                                margin='normal'
                                fullWidth={true} />
                        </Grid>                        
                    {/* </form> */}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Aluno)