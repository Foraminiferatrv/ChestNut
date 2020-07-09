import React from 'react';

import classes from './RollLine.module.css'

function RollLine( props ) {
  return (
    <div className={ classes['RollLine'] }>
      <div className="RollIttem"><img src={props.imgAdress} alt={props.imgName} className="RollIttemImg" /></div>
    </div>
  );
}

export default RollLine;