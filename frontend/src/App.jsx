import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Content from './components/Content'

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
        <Header />
        <SideMenu />
        <Content />
      </div>
    );
  }
}

export default withStyles(styles)(App);
