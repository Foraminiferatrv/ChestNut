import React from 'react';

import RollWindow from '../../RollWindow/RollWindow';
import classes from './MainContainer.module.css';
import ChooseWindow from '../../RollWindow/ChooseWindow/ChooseWindow';

function MainContainer() {
  return (
    <div className={ classes['MainContainer'] }>
      <ChooseWindow />

    </div>
  );
}

export default MainContainer;