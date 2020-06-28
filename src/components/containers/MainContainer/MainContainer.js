import React from 'react';


import RollWindow from '../../RollWindow/RollWindow';
import classes from './MainContainer.module.css';
import ChooseWindow from '../../ChooseWindow/ChooseWindow';
import LootBoxItemWindow from '../LootBoxItemsWindow/LootBoxItemWindow';

function MainContainer() {
  return (
    <div className={ classes['MainContainer'] }>
      {/* <ChooseWindow /> */}
      {/* <LootBoxItemWindow/> */}
      <RollWindow/>
    </div>
  );
}

export default MainContainer;