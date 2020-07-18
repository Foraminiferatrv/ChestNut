import React from 'react';

import classes from './NavItems.module.css';
const NavItems = () => {
  return (
    <ul className={classes.ItemsList}>
      <li ><a href="#" className={ classes.menu }>menu</a></li>
      <li ><a href="#" className={ classes.menu }>menu</a></li>
      <li ><a href="#" className={ classes.menu }>menu</a></li>
      <li ><a href="#" className={ classes.menu }>menu</a></li>
    </ul>
  )
};

export default NavItems;