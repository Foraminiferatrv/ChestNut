import React, { useEffect, useState } from 'react';

import classes from './RollWindow.module.css';

import RollRibbon from '../../RollRibbon/RollRibbon';
import { getRolledItem } from './randomizer';
import WonItemWindow from '../../WonItemWindow/WonItemWindow';


const RollWindow = ( { items } ) => {

  const [rollWindowUiState, setRollWindowUiState] = useState( {
    wonItemWindow: null,
    isInnerRibbonAnimated: true
  } );

  const [randomItemState, setRandomItemState] = useState( {
    fetchedRandomItem: {
      id: null,
      itemData: {
        name: null,
        img: null,
        quality: null
      }
    }
  } );


  useEffect( () => {
    // -----------------------------------TEMPORARY-----------------------------
    setRandomItemState( { ...randomItemState, fetchedRandomItem: getRolledItem( items ) } );
    // -----------------------------------TEMPORARY-----------------------------
  }, [items] );

  const openingAnimationEnd = () => {
    console.log( 'Animation ended!' )
    setRollWindowUiState( {
      ...rollWindowUiState,
      isInnerRibbonAnimated: false,
      wonItemWindow: <WonItemWindow wonItemData={ randomItemState.fetchedRandomItem } />
    } );
  }


  return (
    <div className={ classes.RollWindow }>
      { rollWindowUiState.wonItemWindow }
      <RollRibbon
        chosenItem={ randomItemState.fetchedRandomItem }
        randomItemsData={ items }
        animationEnd={ openingAnimationEnd }
        animate={ rollWindowUiState.isInnerRibbonAnimated }
      />
    </div>
  );
}

export default RollWindow;






// {
//   id: '0e9e3a8a7f504151a16f3885c39093e0',
//     itemData: {
//     quality: "ExceedinglyRare",
//       img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08/360fx360f",
//         name: "CzzzzzzzzzzzzzzzzzzzzZ75-Auto | Twist"
//   }
// }