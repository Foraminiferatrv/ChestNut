import React from 'react';

import classes from './NavBar.module.css';

import NavItems from '../NavItems/NavItems';

function NavBar() {
  return (
    <nav className={classes.NavBar}>
      <NavItems/>
    </nav >
  );
}

export default NavBar;