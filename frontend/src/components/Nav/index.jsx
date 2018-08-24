import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    menu: {
        marginLeft: 16
    }
})

function Nav(props) {
    const { classes } = props

    return (
        <div>
            <AppBar position='absolute' className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        ManageCourses
                    </Typography>

                    <a href='/alunos' className='item-menu'>
                        <Typography variant='subheading' color='inherit'>
                            Alunos
                        </Typography>
                    </a>
                    <a href='/instrutores' className='item-menu'>
                        <Typography variant='subheading' color='inherit'>
                            Instrutores
                        </Typography>
                    </a>
                    <a href='/cursos' className='item-menu'>
                        <Typography variant='subheading' color='inherit'>
                            Cursos
                        </Typography>
                    </a>
                    <a href='/Turmas' className='item-menu'>
                        <Typography variant='subheading' color='inherit'>
                            Turmas
                        </Typography>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Nav)