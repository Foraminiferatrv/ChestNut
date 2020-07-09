import React from 'react';

import classes from './BackButton.module.css';

const BackButton = () => {
  return (
    <div className={classes.BackButton}>
      <div className={classes.Arrow}></div>
    </div>
  );
}

export default BackButton;