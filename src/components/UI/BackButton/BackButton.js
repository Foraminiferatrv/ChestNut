import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './BackButton.module.css';

const BackButton = props => {

  const backHandler = () => {
    props.history.goBack();
  }

  return (
    <div className={ classes.BackButton } onClick={backHandler}>
      <div className={ classes.Arrow }></div>
    </div>
  );
}

export default withRouter( BackButton );