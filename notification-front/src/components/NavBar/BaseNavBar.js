import React from 'react';
import {
  AppBar, Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    height: 60,
    minHeight: 60,
    backgroundColor: '#061520',
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const { position, children } = props;
  return (
    <AppBar
      color="default"
      position={position}
      elevation={0}
    >
      <Toolbar
        classes={{ root: classes.root }}
      >
        <div style={{ flexGrow: 1 }} />
        {children}
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = {
  children: null,
  position: 'relative',
};

Navbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  position: PropTypes.string,
};

export default Navbar;
