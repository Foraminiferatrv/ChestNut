import React, { useReducer, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './MainContainer.module.css';

import RollWindow from '../../RollWindow/RollWindow';
import ChooseWindow from '../../ChooseWindow/ChooseWindow';
import LootBoxItemWindow from '../LootBoxItemsWindow/LootBoxItemWindow';


const uIReducer = ( currentuIState, action ) => {
  switch ( action.type ) {
    case 'CHOOSE_WINDOW_OPEN':
      return { chooseWindowIsOpened: true, lootBoxItemWindowIsOpened: false, rollWindowIsOpened: false };
    case 'LOOTBOX_ITEM_WINDOW_OPEN':
      return { chooseWindowIsOpened: false, lootBoxItemWindowIsOpened: true, rollWindowIsOpened: false };
    case 'ROLL_WINDOW_OPEN':
      return { chooseWindowIsOpened: false, lootBoxItemWindowIsOpened: false, rollWindowIsOpened: true };
    default:
      new Error( "Shoudn't get there!" );
  }

}

const lootBoxReducer = ( currentLootBoxesState, action ) => {
  switch ( action.type ) {
    case 'LOAD_LOOTBOXES':
      return { lootBoxes: action.payload };
    case 'LOAD_ITEMS':
      return { currentItems: Object.values( action.payload ) };
    default:
      new Error( "Shoudn't get there!" );
  }
}
const MainContainer = () => {

  const [uIState, dispatchUi] = useReducer( uIReducer, {
    chooseWindowIsOpened: true,
    lootBoxItemWindowIsOpened: false,
    rollWindowIsOpened: false,
  } );

  const [lootBoxesState, dispatchLootBoxes] = useReducer( lootBoxReducer, {
    lootBoxes: [],
    currentItems: []
  } );


  useEffect( () => {
    fetch( 'https://chestnut-8ecfb.firebaseio.com/csgo/chests.json',
      {
        method: 'GET'
      } ).then( response => response.json() )
      .then( responseData => {
        const loadedLootBoxes = [];
        for ( const key in responseData ) {
          loadedLootBoxes.push( {
            name: responseData[key].name,
            img: responseData[key].img,
            items: responseData[key].items
          } );
        }
        dispatchLootBoxes( { type: 'LOAD_LOOTBOXES', payload: loadedLootBoxes } );
      } ).catch( error => console.log( 'Something went wrong' + error ) )
  }, [] );

  const lootBoxClickHandler = ( items ) => {
    dispatchLootBoxes( { type: 'LOAD_ITEMS', payload: items } );
    dispatchUi( { type: 'LOOTBOX_ITEM_WINDOW_OPEN' } );

  }


  const containerContent = uIState.chooseWindowIsOpened ?
    <ChooseWindow
      lootBoxesArray={ lootBoxesState.lootBoxes }
      clicked={ lootBoxClickHandler }
    />
    : uIState.lootBoxItemWindowIsOpened ? <LootBoxItemWindow itemsArray={ lootBoxesState.currentItems } />
      : uIState.rollWindowIsOpened ? <RollWindow />
        : null;

  return (
    <div className={ classes.MainContainer }>
      <Route path="/"
        exact
        component={ () =>
          <ChooseWindow
            lootBoxesArray={ lootBoxesState.lootBoxes }
            clicked={ lootBoxClickHandler }
          /> }
      />

      {/* { containerContent } */ }
    </div>
  );
}

export default MainContainer;