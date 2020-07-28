import React, { useReducer, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axiosInstanse from '../../../axios';

import classes from './MainContainer.module.css';

// import RollWindow from '../../RollWindow/RollWindow';
import ChooseWindow from '../../ChooseWindow/ChooseWindow';
import LootBoxItemWindow from '../LootBoxItemsWindow/LootBoxItemWindow';


// const uIReducer = ( currentuIState, action ) => {
//   switch ( action.type ) {
//     case 'CHOOSE_WINDOW_OPEN':
//       return { chooseWindowIsOpened: true, lootBoxItemWindowIsOpened: false, rollWindowIsOpened: false };
//     case 'LOOTBOX_ITEM_WINDOW_OPEN':
//       return { chooseWindowIsOpened: false, lootBoxItemWindowIsOpened: true, rollWindowIsOpened: false };
//     case 'ROLL_WINDOW_OPEN':
//       return { chooseWindowIsOpened: false, lootBoxItemWindowIsOpened: false, rollWindowIsOpened: true };
//     default:
//       new Error( "Shoudn't get there!" );
//   }
// }

const lootBoxReducer = ( currentLootBoxesState, action ) => {
  switch ( action.type ) {
    case 'LOAD_LOOTBOXES':
      return { lootBoxes: action.payload };
    case 'LOAD_ITEMS':
      return { currentItems: Object.values( action.payload ) };
    case 'LOAD_CASE_ID':
      return { currentCaseID: action.payload }

    default:
      throw new Error( `Not supported action ${action.type}` );
  }
}
const MainContainer = () => {

  // const [uIState, dispatchUi] = useReducer( uIReducer, {
  //   chooseWindowIsOpened: true,
  //   lootBoxItemWindowIsOpened: false,
  //   rollWindowIsOpened: false,
  // } );

  const [lootBoxesState, dispatchLootBoxes] = useReducer( lootBoxReducer, {
    lootBoxes: [],
    currentCaseID: null
  } );


  useEffect( () => {
    axiosInstanse.get( '/csgo/chests.json' )
      .then( response => {
        const loadedLootBoxes = [];
        for ( const key in response.data ) {
          loadedLootBoxes.push( {
            name: response.data[key].name,
            img: response.data[key].img,
            id: key
          } );
        }
        dispatchLootBoxes( { type: 'LOAD_LOOTBOXES', payload: loadedLootBoxes } );
      } ).catch( error => console.log( 'Something went wrong' + error ) )
  }, [lootBoxesState.lootBoxes] );


  const lootBoxClickHandler = ( items ) => {
    dispatchLootBoxes( { type: 'LOAD_CASE_ID', payload: items } )

  }


  return (
    <div className={ classes.MainContainer }>
      <Redirect exact from="/" to="/csgo/chests" />

      <Route
        exact
        path="/csgo/chests"
        component={ () =>
          <ChooseWindow
            lootBoxesArray={ lootBoxesState.lootBoxes }
            clicked={ lootBoxClickHandler }
          /> }
      />
      <Route />

      <Route
        exact
        path="/csgo/chests/:caseID"
        component={ LootBoxItemWindow }
      />
    </div>
  );
}

export default MainContainer;