import React from 'react';
import { Grid, Typography, Paper, IconButton } from '@material-ui/core';
import { removeNotification } from 'store/notification/actions';
import { DeleteOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { url } from 'api';
import PropTypes from 'prop-types';
import axios from 'axios';

function NotificationForm({ _id, email, keywords, notificationInterval }) {
  const on = useDispatch();
  const removeNotificationById = () => {
    axios.delete(`${url}/${_id}`)
      .then(() => on(removeNotification(_id)));
  };
  return (
    <Paper
      component={Grid}
      item
      elevation={1}
      style={{
        border: 'solid 1px #1e4665',
        margin: 10,
      }}
    >
      <Grid container>
        <Grid
          item
          style={{
            padding: 10,
            paddingRight: 30,
            height: '100px',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={() => removeNotificationById()}
            size="small"
            color="primary"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <DeleteOutlined fontSize="small" />
          </IconButton>

          <Typography variant="h6">Palavra: {keywords}</Typography>
          <Typography variant="body1">Email: {email}</Typography>
          <Typography variant="body1">
            Intervalo: {notificationInterval}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
NotificationForm.propTypes = {
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  notificationInterval: PropTypes.number.isRequired,
};

export default NotificationForm;
