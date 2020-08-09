import React, { useEffect, useState } from 'react';

import classes from './RollWindow.module.css';

import RollRibbon from '../../RollRibbon/RollRibbon';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';
import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import { getRolledItem } from './randomizer';


const RollWindow = ( { items } ) => {

  const [rollWindowUiState, setRollWindowUiState] = useState( {
    isInnerRibbonAnimated: false
  } );

  const [randomItemState, setRandomItemState] = useState( {
    fetchedRandomItem: {
      id: '0e9e3a8a7f504151a16f3885c39093e0',
      itemData: {
        quality: "ExceedinglyRare",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08/360fx360f",
        name: "CzzzzzzzzzzzzzzzzzzzzZ75-Auto | Twist"
      }
    }
  } );

  useEffect( () => {
    // -----------------------------------TEMPORARY-----------------------------
    setRandomItemState( { ...randomItemState, fetchedRandomItem: getRolledItem( items ) } );
    // -----------------------------------TEMPORARY-----------------------------
  }, [] );

  const startOpeningAnimation = () => {
    console.log( 'Animation started!' )
    setRollWindowUiState( { ...rollWindowUiState, isInnerRibbonAnimated: true } )
  }

  const openingAnimationEnd = () => {
    console.log( 'Animation ended!' )
    // setRollWindowUiState( { ...rollWindowUiState, isInnerRibbonAnimated: false } )
  }


  return (
    <div className={ classes.RollWindow }>
      <RollRibbon
        chosenItem={ randomItemState.fetchedRandomItem }
        randomItemsData={ items }
        animationEnd={ openingAnimationEnd }
        animate={ rollWindowUiState.isInnerRibbonAnimated }
      />
      <div className={ classes.ButtonBlock }>
        <GeneralButton name="Open!" clicked={ startOpeningAnimation } />
      </div>
    </div>
  );
}


export default RollWindow;