import KeyenceLogo from '../../descarga.png';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFFFFF',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 'auto',
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      height: 80,
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  title: {
    color: '#000000',
    fontWeight: 500,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginBottom: theme.spacing(2),
      textAlign: 'center',
    },
  },
  contact: {
    color: '#000000',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={KeyenceLogo} alt="Keyence Logo" className={classes.logo} />
        <Typography variant="body1" className={classes.contact}>
          Technical Test for Keyence by Daniel Molina
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


