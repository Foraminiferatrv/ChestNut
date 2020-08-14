import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './BackButton.module.css';

const BackButton = props => {

  const buttonClasses = [classes.BackButton, props.externalClasses];

  const backHandler = () => {
    props.history.goBack();
  }

  return (
    <div className={ buttonClasses.join(' ') } onClick={backHandler}>
      <div className={ classes.Arrow }></div>
    </div>
  );
}

export default withRouter( BackButton );