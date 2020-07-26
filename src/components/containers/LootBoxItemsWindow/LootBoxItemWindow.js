
import React from 'react';

import classes from './LootBoxItemsWindow.module.css';

import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';
import BackButton from '../../UI/BackButton/BackButton';



const LootBoxItemsWindow = ( { itemsArray } ) => {

  const readyItems = itemsArray.map( itemData => {
    return (
      <LootBoxItem
        name={ itemData.name }
        adress={ itemData.img }
      /> );
  } );

  return (

    <div className={ classes.LootBoxItemsWindow }>
      <BackButton />
      <div className={ classes.IttemsBlock }>
        <div className={ classes.ItemsContainer }>
          { readyItems }
        </div>
        <div className={ classes.ButtonBlock }>
          <GeneralButton color='yellow' name='Buy The Case' />
          <GeneralButton name='Open The Case' />
        </div>
      </div>
    </div>

  );
}

export default LootBoxItemsWindow;