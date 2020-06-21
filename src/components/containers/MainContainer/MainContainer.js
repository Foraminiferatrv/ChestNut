import React from 'react';

import RollWindow from '../../RollWindow/RollWindow';
import classes from './MainContainer.module.css';

function MainContainer () {
  console.log(classes);
  return(
    <div className= {classes['MainContainer']}>
      <RollWindow/>
      {/* <CaseChooseWindow> */}
    </div>
  );
}

export default MainContainer;