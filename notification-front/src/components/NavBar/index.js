import React from 'react';
import PropTypes from 'prop-types';
import BaseNavBar from './BaseNavBar';


const NavBar = (props) => {
  const { children, position } = props;

  return (
    <BaseNavBar position={position}>
      {children}
    </BaseNavBar>
  );
};

NavBar.propTypes = {
  position: PropTypes.string,
  children: PropTypes.node,
};

export default NavBar;
