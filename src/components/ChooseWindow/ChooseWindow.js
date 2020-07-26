import React from 'react';

import classes from './ChooseWindow.module.css';

import LootBox from '../LootBox/LootBox';
import BackButton from '../UI/BackButton/BackButton';


const ChooseWindow = ( { lootBoxesArray, clicked } ) => {

  const readyLootBoxes = lootBoxesArray.map( lootBoxData => {
    return ( <LootBox
      lootBoxImg={ lootBoxData.img }
      lootBoxName={ lootBoxData.name }
      items={ lootBoxData.items }
      clicked={ clicked }
    /> );

  } );
  return (
    <React.Fragment>
      <BackButton />
      <div className={ classes.ChooseWindow }>
        { readyLootBoxes }
      </div>
    </React.Fragment>
  );
};

export default ChooseWindow;