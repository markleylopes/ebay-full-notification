import React, { useState } from 'react';
import { url } from 'api';
import { useDispatch } from 'react-redux';
import { addNotification } from 'store/notification/actions';
import { Formik, Field, Form } from 'formik';
import { CustomTextField, CustomSelect } from 'utils/CustomFormik';
import { Grid, Button, MenuItem, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import Snack from 'utils/Snack';
import axios from 'axios';

const NotificationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  keywords: Yup.string().required('Campo obrigatório'),
  notificationInterval: Yup.number().min(2),
});

function NotificationForm() {
  const [snack, setSnack] = useState({
    message: '',
    open: false,
    severity: 'success',
  });
  const setOpen = value => setSnack({ ...snack, open: value });
  const on = useDispatch();

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Formik
          initialValues={{
            email: '',
            keywords: '',
            notificationInterval: 2,
          }}
          onSubmit={values => {
            axios
              .post(url, values)
              .then(res => {
                on(addNotification(res.data));
                setSnack({
                  message: 'Cadastrado, você receberá um email',
                  open: true,
                  severity: 'success',
                });
              })
              .catch(err => {
                const { status } = err.response;
                if (status === 409) {
                  return setSnack({
                    message:
                      'Já existe essa palavra para esse email, tente uma outra palavra',
                    open: true,
                    severity: 'warning',
                  });
                }
                return setSnack({
                  message: 'Erro',
                  open: true,
                  severity: 'error',
                });
              });
            const t = { values };
            t.teste = values;
          }}
          validationSchema={NotificationSchema}
        >
          {({ resetForm }) => (
            <Form style={{ width: 486 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h5" color="secondary">
                    Cadastre suas notificações
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    label="Email"
                    helperText="Campo obrigatório"
                    component={CustomTextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="keywords"
                    label="Palavra de Busca"
                    helperText="Campo obrigatório"
                    component={CustomTextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notificationInterval"
                    margin="dense"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    helperText="Selecione a cada quanto tempo deseja receber notificações"
                    component={CustomSelect}
                  >
                    <MenuItem value={2}>Receber a cada 2 minutos</MenuItem>
                    <MenuItem value={10}>Receber a cada 10 minutos</MenuItem>
                    <MenuItem value={30}>Receber a cada 30 minutos</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => resetForm()}
                  >
                    limpar
                  </Button>
                </Grid>
                <Grid item xs={6} align="right">
                  <Button
                    size="small"
                    type="submit"
                    color="primary"
                    variant="outlined"
                  >
                    Salvar notificação
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Snack {...snack} setOpen={setOpen} />
      </Grid>
    </>
  );
}

export default NotificationForm;
