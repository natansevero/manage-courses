import React, { Component } from 'react';

import './index.css'

import { withStyles } from '@material-ui/core/styles'

import Nav from './components/Nav'
import SideMenu from './components/SideMenu'
import Routes from './Routes'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
})

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Nav />
        <SideMenu />
        <Routes />
      </div>
    );
  }
}

export default withStyles(styles)(App);
