import React from 'react';
import PropTypes from 'prop-types';

export const AppContainer = ({ children }) => (
  <div style={{ maxWidth: 1255, margin: '0 auto' }}>
    {children}
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AppMain = ({ children }) => (
  <div style={{ flex: 1, order: 2, padding: '0 0 88px 0' }}>
    {children}
  </div>
);

AppMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PageContainer = ({ children, top }) => (
  <div style={{ marginTop: top, padding: 20 }}>
    {children}
  </div>
);

PageContainer.defaultProps = {
  top: 0,
};


PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.number,
};
