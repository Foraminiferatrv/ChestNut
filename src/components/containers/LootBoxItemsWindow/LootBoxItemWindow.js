import React, { useEffect, useState } from 'react';
import axiosInstanse from '../../../axios';
import { Link, withRouter } from 'react-router-dom';

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
            dropChance: response.data.items[key].dropChance,
            itemData: {
              quality: response.data.items[key].quality,
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
        quality={ item.itemData.quality }
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
          <Link to={
            { pathname: '/csgo/chests/' + props.match.params.caseID + '/opening' }
          }
            onClick={ props.clicked.bind( this, lootBoxItemsState.lootBoxItems ) }
          >
            <GeneralButton name='Open The Case' />
          </Link>
        </div>
      </div>
    </div>

  );
}

export default withRouter( LootBoxItemsWindow );