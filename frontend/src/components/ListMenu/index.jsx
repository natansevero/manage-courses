import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default props => (
    <List component='nav'>
        <ListItem button>
            <a href="">
                <ListItemText primary='Alunos' />
            </a>
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText primary='Cursos' />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText primary='Instrutores' />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText primary='Turmas' />
        </ListItem>
        <Divider />
    </List>
)