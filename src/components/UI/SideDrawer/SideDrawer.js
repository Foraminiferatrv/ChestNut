import React from 'react';
import { motion } from 'framer-motion';

import classes from './SideDrawer.module.css';

import NavItems from '../../Header/NavItems/NavItems';
import Logo from '../../Header/Logo/Logo';

const SideDrawer = props => {
  let sideDrawerClasses = [classes.SideDrawer, props.isSidedrawerOpened ? classes.Open : classes.Close];



  return (
    <motion.div
      animate={ props.isSidedrawerOpened ? { x: 0 } : { x: '-100%' } }
      initial={ { x: '-100%' } }
      transition={ { type: 'inertia' }, { duration: 0.13 } }

className = { classes.SideDrawer } >
  <div className={ classes.Logo }>
    <Logo />
  </div>
  <nav className={ classes.NavList }>
    <NavItems />
  </nav>
    </motion.div >
  );
}

export default SideDrawer;