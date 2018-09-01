import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default props => (
    <Grid container spacing={16}>
        <Grid item md={5}>
            <TextField
                id='nome'
                placeholder='Nome'
                className={props.classes.textField}
                margin='normal'
                onChange={props.handleChangeNome}
                value={props.nome}
                fullWidth={true} />
        </Grid>
        <Grid item md={5}>
            <TextField
                id='data_nasc'
                placeholder='Data de Nascimento'
                className={props.classes.textField}
                onChange={props.handleChangeDataNasc}
                value={props.dataNasc}
                margin='normal'
                fullWidth={true} />
        </Grid>
        <Grid item md={2}>
            {props.isEditing ?
                <Button
                    size='large'
                    type='submit'
                    fullWidth={true}
                    variant='contained'
                    className={props.classes.editButton}
                    onClick={props.handleUpdate}
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
                    className={props.classes.button}
                    onClick={props.handleAdd}
                >
                    Cadastrar
                </Button>
            }
        </Grid>
    </Grid>
)