import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import classes from './RollWindow.module.css';

import GeneralButton from '../UI/GeneralButton/GeneralButton';
import LootBoxItem from '../LootBoxItem/LootBoxItem';

const RollWindow = ( { items } ) => {

  let content = <Redirect to="/csgo/chests" />;

  if ( items !== null && items !== undefined ) {
    content = items.map( item => (
      <LootBoxItem
        quality={ item.itemData.quality }
        key={ item.id }
        adress={ item.itemData.img }
        name={ item.itemData.name }
      />
    ) )
  }

  const outputRollResult = ( rawItems ) => {

    const randomizer = () => {

      const randomNum = Math.random() * 100;
      console.log( randomNum );

      if ( randomNum <= 0.26 ) {
        return 'ExceedinglyRare';
      } else
        if ( randomNum <= 0.64 ) {
          return 'Covert';
        }
        else
          if ( randomNum <= 3.2 ) {
            return 'Classified';
          }
          else
            if ( randomNum <= 15.98 ) {
              return 'Restricted';
            }
            else {
              return 'MilSpec';
            }

    }

    const findChosenItem = ( allItems, quality ) => {

      console.log( allItems );
    }
    findChosenItem( rawItems, randomizer() );
  }
  return (
    <div className={ classes.RollWindow }>
      <div className={ classes.RollLine }>
        { content }
      </div>

      <div className={ classes.ButtonBlock }>
        <GeneralButton name="Open!" clicked={ () => outputRollResult( items ) } />
      </div>
    </div>
  );
}

export default RollWindow;