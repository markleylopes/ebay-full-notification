const overrideClasses = {
  MuiTableCell: {
    root: {
      padding: '18px 10px 16px 10px',
      whiteSpace: 'nowrap',
    },
    body: {
      textTransform: 'uppercase',
    },
  },
  MuiTypography: {
    h6: {
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 13,
    },
  },
  TableContainer: {
    root: {
      maxHeight: 400,
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: '0.825rem',
    },
  },
  MuiToolbar: {
    dense: {
      minHeight: 60,
    },
  },
};

export default overrideClasses;
