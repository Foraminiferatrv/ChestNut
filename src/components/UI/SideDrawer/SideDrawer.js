import React from 'react';

import classes from './SideDrawer.module.css';

import NavItems from '../../Header/NavItems/NavItems';
import Logo from '../../Header/Logo/Logo';

const SideDrawer = props => {
  let sideDrawerClasses = [classes.SideDrawer, props.isSidedrawerOpened ? classes.Open : classes.Close];



  return (
    <div className={ sideDrawerClasses.join( ' ' ) }>
      <div className={ classes.Logo }>
        <Logo />
      </div>
      <nav className={ classes.NavList }>
        <NavItems />
      </nav>
    </div>
  );
}

export default SideDrawer;