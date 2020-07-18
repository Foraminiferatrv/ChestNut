import React from 'react';

import classes from './BurgerMenuButton.module.css'

const BurgerMenuButton = props => {
  let menuClasses = [props.isSidedrawerOpened ? classes.Open : null, classes.Container];

  return (
    <div className={ menuClasses.join( ' ' ) } onClick={ props.sidedrawerToggle } >
      <div className={ classes.Bun1 } />
      <div className={ classes.Bun2 } />
      <div className={ classes.Bun3 } />
    </div>
  );
}

export default BurgerMenuButton;