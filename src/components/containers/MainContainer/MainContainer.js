import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import axiosInstanse from '../../../axios';

import classes from './MainContainer.module.css';

import RollWindow from '../../containers/RollWindow/RollWindow';
import ChooseWindow from '../../ChooseWindow/ChooseWindow';
import LootBoxItemWindow from '../LootBoxItemsWindow/LootBoxItemWindow';
import Spinner from '../../UI/Spinner/Spinner';



const MainContainer = () => {
  const [lootBoxesState, setLootBoxes] = useState( {
    lootBoxes: [],

  } );

  const [itemsState, setItems] = useState( {
    currentItems: null,
    currentCaseID: null
  } );

  const [lootBoxItemsWindowRouteState, setLootBoxItemsWindowRouteState] = useState( {
    loadingStatus: true
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
      .catch( error => console.log( 'Get Lootboxes: Something went wrong!!!!!!! ' + error ) );
  }, [] );

  useEffect( () => {
    setLootBoxItemsWindowRouteState( { ...lootBoxItemsWindowRouteState, loadingStatus: true } )
    if ( itemsState.currentCaseID ) {
      axiosInstanse.get( `/csgo/chests/${itemsState.currentCaseID}.json` ).then( response => {
        if ( response.data !== null && response.data !== undefined ) {
          let currentItemsArray = [];
          for ( const key in response.data.items ) {
            currentItemsArray.push( {
              name: response.data.items[key].name,
              img: response.data.items[key].img,
              quality: response.data.items[key].quality,
              id: key
            }
            )
          }
          return currentItemsArray;
        }
      } ).then( ( currentItemsArray ) => setItems( { ...itemsState, currentItems: currentItemsArray } ) )
        .then( () => {
          setLootBoxItemsWindowRouteState( { ...lootBoxItemsWindowRouteState, loadingStatus: false } )
        } )
        .catch( error => console.log( 'Get Items: Something went wrong!!!!!!! ' + error ) );
    }
  }, [itemsState.currentCaseID] );



  const lootBoxClickHandler = id => {
    setItems( { ...itemsState, currentCaseID: id } );
  }

  const openCaseClickHandler = items => {
    setItems( { ...itemsState, currentItems: items } );
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
            lootBoxItemsWindowRouteState.loadingStatus ? <Spinner/> :
              <LootBoxItemWindow
                clicked={ openCaseClickHandler }
                allItemsData={ itemsState.currentItems }
              />
          }
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