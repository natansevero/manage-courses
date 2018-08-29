import React, { Component } from 'react'
import axios from 'axios'

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
    itemList: {
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
        _id: '',
        nome: '',
        data_nasc: '',
        alunos: [],
        isEditing: false
    }

    componentWillMount() {
        this.handleList()
    }

    handleList() {
        axios.get(`${API_URI}/alunos`)
            .then(res => {
                this.setState({ ...this.state, alunos: res.data })
            })
            .catch(err => console.log(err))
    }

    handleAdd(e) {
        let aluno = {
            nome: this.state.nome,
            data_nasc: this.state.data_nasc
        }

        axios.post(`${API_URI}/alunos`, aluno)
            .then(res => this.handleList())
            .catch(err => alert('Falha ao cadastrar o aluno :('))

        this.handleList.bind(this)
    }

    handleUpdate() {
        axios.put(`${API_URI}/alunos/${this.state._id}`, {
            nome: this.state.nome,
            data_nasc: this.state.data_nasc
        })
        .then(res =>  { 
            this.handleList()
            this.setState({
                ...this.state,
                _id: '',
                nome: '',
                data_nasc: '',
                isEditing: !this.state.isEditing
            }) 
        })
        .catch(err => alert('Falha ao editar aluno'))
    }

    toggleEdit(aluno) {
        this.setState(
            { 
                ...this.state, 
                isEditing: !this.state.isEditing,
                _id: aluno._id,
                nome: aluno.nome,
                data_nasc: aluno.data_nasc 
            })
    }

    handleDelete(id_aluno) {
        axios.delete(`${API_URI}/alunos/${id_aluno}`)
            .then(res => this.handleList())
            .catch(err => alert('Falha ao remover aluno :('))
    }

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
                            onChange={(e) => this.setState({ ...this.state, nome: e.target.value })}
                            value={this.state.nome}
                            fullWidth={true} />
                    </Grid>
                    <Grid item md={5}>
                        <TextField
                            id='data_nasc'
                            placeholder='Data de Nascimento'
                            className={classes.textField}
                            onChange={(e) => this.setState({ ...this.state, data_nasc: e.target.value })}
                            value={this.state.data_nasc}
                            margin='normal'
                            fullWidth={true} />
                    </Grid>
                    <Grid item md={2}>
                        {this.state.isEditing ?
                            <Button
                                size='large'
                                type='submit'
                                fullWidth={true}
                                variant='contained'
                                className={classes.editButton}
                                onClick={this.handleUpdate.bind(this)}
                            >
                                Editar
                                </Button>
                            :
                            <Button
                                size='large'
                                type='button'
                                fullWidth={true}
                                variant='contained'
                                color='primary'
                                className={classes.button}
                                onClick={this.handleAdd.bind(this)}
                            >
                                Cadastrar
                                </Button>
                        }
                    </Grid>
                </Grid>


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
                                    <IconButton 
                                        onClick={() => this.toggleEdit(aluno)} 
                                        className={classes.editButton}>
                                        <Icon>edit_icon</Icon>
                                    </IconButton>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton
                                        onClick={() => this.handleDelete(aluno._id)}
                                        className={classes.deleteButton}>
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