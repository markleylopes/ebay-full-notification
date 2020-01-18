/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@material-ui/core';

export const CustomTextField = ({
  form,
  field,
  disabled,
  helperText,
  ...rest
}) => {
  const { errors, touched } = form;
  const { name } = field;
  return (
    <>
      <TextField
        margin="dense"
        variant="outlined"
        helperText={!touched[name] ? helperText : errors[name] || helperText}
        InputLabelProps={{ shrink: true }}
        fullWidth
        error={errors[name] && touched[name]}
        disabled={disabled}
        value={field.value}
        {...field}
        {...rest}
      />
    </>
  );
};

export const CustomSelect = ({ field, disabled, children, ...rest }) => (
  <TextField
    select
    fullWidth
    variant="outlined"
    InputLabelProps={{ shrink: true }}
    margin="dense"
    disabled={disabled}
    {...field}
    {...rest}
  >
    {children}
  </TextField>
);
