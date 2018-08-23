import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default props => (
    <List component='nav'>
            <a href="/alunos" className='item-menu'>
                <ListItem button>
                        <ListItemText primary='Alunos' />
                </ListItem>
            </a>
        <Divider />
            <a href="/cursos" className='item-menu'>
                <ListItem button>
                        <ListItemText primary='Cursos' />
                </ListItem>
            </a>
        <Divider />
            <a href="/instrutores" className='item-menu'>
                <ListItem button>
                        <ListItemText primary='Instrutores' />
                </ListItem>
            </a>
        <Divider />
            <a href="/turmas" className='item-menu'>
                <ListItem button>
                        <ListItemText primary='Turmas' />
                </ListItem>
            </a>
        <Divider />
    </List>
)