import React from 'react';
import LootBoxItem from '../LootBoxItem/LootBoxItem';

import classes from './RollRibbon.module.css';

import { getRolledItem } from '../containers/RollWindow/randomizer';

const RollRibon = ( { randomItemsData, chosenItem } ) => {
  console.log( chosenItem );
  const createRandomItem = ( itemData ) => {

    return itemData.map( ( { id, itemData }, index ) => <LootBoxItem
      key={ `${id}${index}` }
      id={ id }
      { ...itemData } />
    )
  }

  const createRollRibbon = ( allItemsData, numberOfItems ) => {
    if ( allItemsData !== null && allItemsData !== undefined ) {
      let itemsDataForContent = [];
      for ( let i = 0; i <= numberOfItems; i++ ) {
        itemsDataForContent = [...itemsDataForContent, getRolledItem( allItemsData )];
      }
      console.log( itemsDataForContent );
      return createRandomItem( itemsDataForContent );
    }
  }


  return (
    <div className={ classes.RollLine }>
      <div className={ classes.InnerRibbon }>
        { createRollRibbon( randomItemsData, 50 ) }
        <LootBoxItem
          id={ chosenItem.id }
          { ...chosenItem.itemData } />
        { createRollRibbon( randomItemsData, 2 ) }

      </div>
    </div>
  )
}

export default RollRibon;