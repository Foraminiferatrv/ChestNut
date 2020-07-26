import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = props => {
  const backdropClasses = [classes.Backdrop, !props.isSidedrawerOpened ? classes.Hide : null]

  return (
    <div className={ backdropClasses.join( ' ' ) } onClick={props.sidedrawerToggle}></div>
  );
}

export default Backdrop;