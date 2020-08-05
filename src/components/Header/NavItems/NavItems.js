import React from 'react';
import { NavLink } from 'react-router-dom';



import classes from './NavItems.module.css';

const NavItems = () => {
  return (
    <ul className={ classes.ItemsList }>
      <li >
        <NavLink
          to="/csgo/chests"
          className={ classes.Menu }
          activeClassName={ classes.ActiveLink }
        > Lootboxes </NavLink>
      </li>

      <li >
        <NavLink
          exact
          to=""
          className={ classes.Menu }
          activeClassName="ActiveLink"
        > Menu </NavLink>
      </li>
      <li >
        <NavLink
          exact
          to=""
          className={ classes.Menu }
          activeClassName="ActiveLink"
        > Menu </NavLink>
      </li>
      <li >
        <NavLink
          exact
          to=""
          className={ classes.Menu }
          activeClassName="ActiveLink"
        > Menu </NavLink>
      </li>

    </ul>
  )
};

export default NavItems;
