import React from 'react';

import classes from './RollWindow.module.css';
import RollLine from './RollLine/RollLine';

function RollWindow () {
  return(
    <div className={classes['RollWindow']}>
      <RollLine>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </RollLine>
    </div>
  );
}

export default RollWindow;