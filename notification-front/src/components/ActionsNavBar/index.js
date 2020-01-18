import React from 'react';
import { IconButton, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BaseNavBar from 'components/NavBar';

const NavBar = () => {
  const on = useDispatch();
  const username = 'username';
  return (
    <>
      <BaseNavBar position="sticky">
        <Typography
          variant="subtitle2"
          color="inherit"
        >
          Usuário:
        </Typography>
        <Button color="primary">
          {username}
        </Button>
        <IconButton
          color="primary"
          onClick={() => on(push('/'))}
        >
          <ViewModuleIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => false}
        >
          <ExitToAppIcon />
        </IconButton>
      </BaseNavBar>
    </>
  );
};

export default NavBar;
