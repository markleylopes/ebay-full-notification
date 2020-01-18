/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNotifications } from 'store/notification/actions';
import { Grid } from '@material-ui/core';
import { url } from 'api';
import axios from 'axios';
import Card from 'components/Card';

function NotificationForm() {
  const [notifications] = useSelector(state => [state.notification]);
  const on = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        on(loadNotifications(res.data));
      })
      .catch(err => {});
  }, []);
  return (
    <Grid container spacing={1} justify="center">
      {notifications.map(item => (
        <Card key={item._id} {...item} />
      ))}
    </Grid>
  );
}

export default NotificationForm;
