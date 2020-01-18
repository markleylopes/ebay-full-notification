import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import colors from './colors';
import overrideClasses from './overrideClasses';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  palette: {
    type: 'light',
    primary: colors.primary,
    accent: colors.accent,
    secondary: colors.secondary,
    error: colors.error,
    backgroundColor: colors.background,
  },
  overrides: overrideClasses,
});

export default function Theme(props) {
  return <MuiThemeProvider theme={theme} {...props} />;
}

Theme.displayName = 'Theme';
