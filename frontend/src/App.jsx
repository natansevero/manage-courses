import React, { Component } from 'react';

import './index.css'

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.root}>
          <Nav />
          <Routes />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(App);
