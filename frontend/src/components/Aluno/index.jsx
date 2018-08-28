import React, { Component } from 'react'
import axios from 'axios'

import { DatePicker } from 'material-ui-pickers';

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

const API_URI = 'http://localhost:3000/api'

class Aluno extends Component {
    state = {
        nome: '',
        data_nasc: new Date(),
        alunos: []
    }

    componentWillMount() {
        axios.get(`${API_URI}/alunos`)
            .then(res =>  { 
                this.setState({ ...this.state, alunos: res.data })
            })
            .catch(err => console.log(err))
    }

    handleDateChange = (date) => {
        this.setState({ data_nasc: date })
    }

    handleSubmit(e) {
        e.preventDefault();
        let aluno = {
            nome: this.state.nome,
            data_nasc: this.state.data_nasc
        }
        console.log(aluno)
    }

    render() {
        const { classes } = this.props
        return (
            <div style={{ paddingLeft: 80, paddingRight: 90, paddingTop: 20 }}>
                <div className={classes.toolbar} />
                <Header title='Alunos' />

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Grid container spacing={16}>
                        <Grid item md={5}>
                            <TextField
                                id='nome'
                                placeholder='Nome'
                                className={classes.textField}
                                margin='normal'
                                onChange={(e) => this.setState({ ...this.state, nome: e.target.value })}
                                value={this.state.nome}
                                fullWidth={true} />
                        </Grid>
                        <Grid item md={5}>
                            {/* <TextField
                                id='data_nasc'
                                type='date'
                                placeholder='Data de Nascimento'
                                className={classes.textField}
                                onChange={(e) => this.setState({ ...this.state, data_nasc: e.target.value })}
                                value={this.state.data_nasc}
                                margin='normal'
                                fullWidth={true} /> */}

                            <DatePicker 
                                keyboard={true}
                                format='DD/MM/YYYY'
                                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                                value={this.state.data_nasc}
                                onChange={this.handleDateChange}
                                disableOpenOnEnter
                                className={classes.textField}
                                animateYearScrolling={false}
                                margin='normal'
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Button
                                size='large'
                                type='submit'
                                fullWidth={true}
                                variant='contained'
                                color='primary'
                                className={classes.button}
                            >
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <List component='nav' className={classes.list}>
                    {this.state.alunos.map(aluno => (
                        <ListItem key={aluno._id} divider={true}>
                            <Grid container spacing={16}>
                                <Grid className={classes.itemList} item md={5}>
                                    <ListItemText>{aluno.nome}</ListItemText>
                                </Grid>
                                <Grid className={classes.itemList} item md={5}>
                                    <ListItemText>{aluno.data_nasc}</ListItemText>
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
                    ))}
                </List>

            </div>
        )
    }
}

export default withStyles(styles)(Aluno)