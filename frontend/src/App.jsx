import React, { Component } from 'react';

import './index.css'

import { withStyles } from '@material-ui/core/styles'

import Nav from './components/Nav'
import Routes from './Routes'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default withStyles(styles)(App);
