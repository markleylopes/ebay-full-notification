import React from 'react';
import { PageContainer, AppMain } from 'components/Layouts/CustomLayout';
import { Grid } from '@material-ui/core';
import NotificationForm from 'components/NotificationForm';
import Notification from 'components/NotificationContainer';
import NavFooter from 'components/NavFooter';
import NavBar from 'components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <AppMain>
        <PageContainer>
          <Grid container>
            <Grid item xs={6} style={{ borderRight: 'solid 1px black' }}>
              <NotificationForm />
            </Grid>
            <Grid item xs={6}>
              <Notification />
            </Grid>
          </Grid>
        </PageContainer>
      </AppMain>
      <NavFooter />
    </>
  );
}

export default Home;
