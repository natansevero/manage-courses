import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';

import ListMenu from '../ListMenu'

const drawerWidth = 240;

const styles = theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },

    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },

    toolbar: theme.mixins.toolbar,
})

function SideMenu(props) {
    const { classes } = props
    return (
        <div>
            <Drawer variant="permanent" classes={{ paper: classes.drawerPaper, }} >
                <div className={classes.toolbar} />
                <ListMenu />
            </Drawer>
        </div>
    )
}

export default withStyles(styles)(SideMenu)