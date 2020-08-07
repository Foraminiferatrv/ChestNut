import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axiosInstanse from '../../../axios';

import classes from './RollWindow.module.css';

import RollRibon from '../../RollRibbon/RollRibbon';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';


const RollWindow = ( { items } ) => {
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

  // const chosenItem = randomItemState.fetchedRandomItem != null ? createRandomItem( [randomItemState.fetchedRandomItem] ) : null;


  return (
    <div className={ classes.RollWindow }>
      <RollRibon chosenItem={ randomItemState.fetchedRandomItem } randomItemsData={ items } />
      <div className={ classes.ButtonBlock }>
        <GeneralButton name="Open!" clicked={ () => { } } />
      </div>
    </div>
  );
}


export default RollWindow;