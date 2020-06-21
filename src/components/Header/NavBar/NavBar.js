import React from 'react';

import classes from './NavBar.module.css';

function NavBar() {
  return (
    <nav >
      <ul className="row">
        <li className="col-md"><a href="#" className={classes.menu}>menu</a></li>
        <li className="col-md"><a href="#" className={classes.menu}>menu</a></li>
        <li className="col-md"><a href="#" className={classes.menu}>menu</a></li>
        <li className="col-md"><a href="#" className={classes.menu}>menu</a></li>
      </ul>
    </nav >
  );
}

export default NavBar;