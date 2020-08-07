import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import axiosInstanse from '../../../axios';

import classes from './MainContainer.module.css';

import RollWindow from '../../containers/RollWindow/RollWindow';
import ChooseWindow from '../../ChooseWindow/ChooseWindow';
import LootBoxItemWindow from '../LootBoxItemsWindow/LootBoxItemWindow';



const MainContainer = () => {
  const [lootBoxesState, setLootBoxes] = useState( {
    lootBoxes: [],
    currentCaseID: null
  } );

  const [itemsState, setItems] = useState( {
    currentItems: null
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
        return loadedLootBoxes;
      } )
      .then( ( loadedLootBoxes ) => setLootBoxes( { ...lootBoxesState, lootBoxes: loadedLootBoxes } ) )
      .catch( error => console.log( 'Something went wrong' + error ) )
  }, [] );


  const lootBoxClickHandler = id => {
    setLootBoxes( { ...lootBoxesState, currentCaseID: id } )
  }

  const openCaseClickHandler = items => {
    setItems( { ...itemsState, currentItems: items } )
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
      <Switch>
        <Route
          exact
          path="/csgo/chests/:caseID"
          component={ () =>
            <LootBoxItemWindow
              clicked={ openCaseClickHandler }
            /> }
        />
        <Route
          exact
          path={ `/csgo/chests/:caseID/opening` }
          component={ () =>
            <RollWindow
              items={ itemsState.currentItems }
            />
          }
        />
      </Switch>
    </div>
  );
}

export default MainContainer;