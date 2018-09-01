import React from 'react'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default props => (
    <List component='nav' className={props.classes.list}>
        {props.alunos.map(aluno => (
            <ListItem key={aluno._id} divider={true}>
                <Grid container spacing={16}>
                    <Grid className={props.classes.itemList} item md={5}>
                        <ListItemText>{aluno.nome}</ListItemText>
                    </Grid>
                    <Grid className={props.classes.itemList} item md={5}>
                        <ListItemText>{aluno.data_nasc}</ListItemText>
                    </Grid>
                    <Grid item md={1}>
                        <IconButton
                            onClick={() => props.toggleEdit(aluno)}
                            className={props.classes.editButton}>
                            <Icon>edit_icon</Icon>
                        </IconButton>
                    </Grid>
                    <Grid item md={1}>
                        <IconButton
                            onClick={() => props.handleDelete(aluno._id)}
                            className={props.classes.deleteButton}>
                            <Icon>delete_icon</Icon>
                        </IconButton>
                    </Grid>
                </Grid>
            </ListItem>
        ))}
    </List>
)