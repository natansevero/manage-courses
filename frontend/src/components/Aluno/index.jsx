import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';

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
    button: {
        margin: theme.spacing.unit,
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    itemList : {
        display: 'flex', 
        alignItems: 'center',
    },
    editButton: {
        color: 'white',
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[700],
        },
    },
    deleteButton: {
        color: 'white',
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
})

class Aluno extends Component {

    render() {
        const { classes } = this.props
        return (
            <div style={{ paddingLeft: 80, paddingRight: 90, paddingTop: 20 }}>
                <div className={classes.toolbar} />
                <Header title='Alunos' />

                <Grid container spacing={16}>
                    <Grid item md={5}>
                        <TextField
                            id='nome'
                            placeholder='Nome'
                            className={classes.textField}
                            margin='normal'
                            fullWidth={true} />
                    </Grid>
                    <Grid item md={5}>
                        <TextField
                            id='data_nasc'
                            placeholder='Data de Nascimento'
                            className={classes.textField}
                            margin='normal'
                            fullWidth={true} />
                    </Grid>
                    <Grid item md={2}>
                        <Button
                            size='large'
                            fullWidth={true}
                            variant='contained'
                            color='primary'
                            className={classes.button}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>

                <List component='nav' className={classes.list}>
                    <ListItem divider={true}>
                        <Grid container spacing={16}>
                            <Grid className={classes.itemList} item md={10}>
                                <ListItemText>Teste1</ListItemText>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton className={classes.editButton}>
                                    <Icon>edit_icon</Icon>
                                </IconButton>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton className={classes.deleteButton}>
                                    <Icon>delete_icon</Icon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem divider={true}>
                        <Grid container spacing={16}>
                            <Grid className={classes.itemList} item md={10}>
                                <ListItemText>Teste2</ListItemText>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton className={classes.editButton}>
                                    <Icon>edit_icon</Icon>
                                </IconButton>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton className={classes.deleteButton}>
                                    <Icon>delete_icon</Icon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>

            </div>
        )
    }
}

export default withStyles(styles)(Aluno)