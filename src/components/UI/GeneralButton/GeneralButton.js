import React from 'react';

import classes from './GeneralButton.module.css';

const GeneralButton = ( props ) => {
  const buttonClasses = `${classes.GeneralButton} ${classes[props.color]}`;

  return (
    <button onClick={props.clicked} className={ buttonClasses } >{ props.name }</button>
  );
}

export default GeneralButton;