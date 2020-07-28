import React, { useEffect, useState } from 'react';
import axiosInstanse from '../../../axios';

import classes from './LootBoxItemsWindow.module.css';

import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';
import BackButton from '../../UI/BackButton/BackButton';

const LootBoxItemsWindow = ( props ) => {

  const [lootBoxItemsState, setLootBoxItems] = useState(
    {
      lootBoxItems: []
    }
  );

  useEffect( () => {
    let mounted = true;
    axiosInstanse.get( `/csgo/chests/${props.match.params.caseID}.json` )
      .then( response => {
        let itemArray = [];
        for ( const key in response.data.items ) {
          itemArray.push( {
            id: key,
            itemData: {
              img: response.data.items[key].img,
              name: response.data.items[key].name
            }
          } )
        }
        if ( mounted ) {
          setLootBoxItems( ( prevState ) => ( { ...prevState, lootBoxItems: itemArray } ) );
        }
      } ).catch( error => console.log( 'loot Box Item Window error' + error ) );
    return () => mounted = false;
  }, [] );

  const readyItems = lootBoxItemsState.lootBoxItems.map( item => {
    return (
      <LootBoxItem
        key={ item.id }
        name={ item.itemData.name }
        adress={ item.itemData.img }
      /> );
  } )

  return (

    <div className={ classes.LootBoxItemsWindow }>
      <BackButton />
      <div className={ classes.IttemsBlock }>
        <div className={ classes.ItemsContainer }>
          { readyItems }
        </div>
        <div className={ classes.ButtonBlock } >
          <GeneralButton color='yellow' name='Buy The Case' />
          <GeneralButton name='Open The Case' />
        </div>
      </div>
    </div>

  );
}

export default LootBoxItemsWindow;