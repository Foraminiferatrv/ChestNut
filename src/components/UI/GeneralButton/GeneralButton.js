import React from 'react';

import classes from './GeneralButton.module.css';

const GeneralButton = ( props ) => {
  const buttonClasses = [classes.GeneralButton, classes[props.color], props.externalClasses];

  return (
    <button onClick={ props.clicked } className={ buttonClasses.join(' ') } >{ props.name }</button>
  );
}

export default GeneralButton;