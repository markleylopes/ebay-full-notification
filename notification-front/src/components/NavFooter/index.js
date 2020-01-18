import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core/';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: 60,
    backgroundColor: '#061520',
    minHeight: 60,
  },
  toolbar: {
    height: 60,
    minHeight: 60,
  },
});

const NavFooter = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <AppBar
      classes={{ root: classes.appBar }}
      color="default"
      elevation={0}
      position="fixed"
    >
      <Toolbar
        classes={{ root: classes.toolbar }}
      >
        <div style={{ flexGrow: 1 }} />
        {children}
      </Toolbar>
    </AppBar>
  );
};

NavFooter.defaultProps = {
  children: null,
};

NavFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default NavFooter;
