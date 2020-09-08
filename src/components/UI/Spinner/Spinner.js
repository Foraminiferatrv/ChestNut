import React from 'react';

import classes from './Spinner.module.css';

const Spinner = (props) => {
  let spinnerClasses = [props.externalClasses,classes.Loader ];


  return (
    < div className={ spinnerClasses.join( ' ' ) } > Loading... </div>
  );
}

export default Spinner;