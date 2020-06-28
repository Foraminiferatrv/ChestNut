import React from 'react';

import classes from './GeneralButton.module.css';

function GeneralButton( props ) {
  const buttonClasses = `${classes.GeneralButton} ${classes[props.color]}`; 
  
  return (
    <button className={buttonClasses} >{ props.name }</button>
  );
}

export default GeneralButton;