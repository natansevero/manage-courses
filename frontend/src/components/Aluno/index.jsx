import React, { Component } from 'react'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';

import Header from '../Header'
import AlunoForm from './AlunoForm'
import AlunoList from './AlunoList'

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
        dataNasc: '',
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

    handleChangeNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    handleChangeDataNasc(e) {
        this.setState({ ...this.state, dataNasc: e.target.value })
    }

    handleAdd(e) {
        let aluno = {
            nome: this.state.nome,
            data_nasc: this.state.dataNasc
        }

        axios.post(`${API_URI}/alunos`, aluno)
            .then(res => {
                this.setState({ ...this.state, dataNasc: '', nome: '' })
                this.handleList()
            })
            .catch(err => alert('Falha ao cadastrar o aluno :('))
    }

    handleUpdate() {
        axios.put(`${API_URI}/alunos/${this.state._id}`, {
            nome: this.state.nome,
            dataNasc: this.state.dataNasc
        })
            .then(res => {
                this.handleList()
                this.setState({
                    ...this.state,
                    _id: '',
                    nome: '',
                    dataNasc: '',
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
                dataNasc: aluno.dataNasc
            }
        )
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

                <AlunoForm
                    classes={classes}
                    nome={this.state.nome}
                    dataNasc={this.state.dataNasc}
                    isEditing={this.state.isEditing}
                    handleChangeNome={this.handleChangeNome.bind(this)}
                    handleChangeDataNasc={this.handleChangeDataNasc.bind(this)}
                    handleAdd={this.handleAdd.bind(this)}
                    handleUpdate={this.handleUpdate.bind(this)} />

                <AlunoList
                    classes={classes}
                    alunos={this.state.alunos}
                    toggleEdit={this.toggleEdit.bind(this)}
                    handleDelete={this.handleDelete.bind(this)} />
            </div>
        )
    }
}

export default withStyles(styles)(Aluno)