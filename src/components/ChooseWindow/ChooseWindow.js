import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ChooseWindow.module.css';

import LootBox from '../LootBox/LootBox';

const ChooseWindow = ( props ) => {

  const readyLootBoxes = props.lootBoxesArray.map( lootBoxData => {
    return (
      <Link
        key={ lootBoxData.id }
        to={
          {
            pathname: '/csgo/chests/' + lootBoxData.id
          }
        }>
        <LootBox
          lootBoxImg={ lootBoxData.img }
          lootBoxName={ lootBoxData.name }
          lootBoxID={ lootBoxData.id }
          clicked={ props.clicked }
        />
      </Link> );

  } );

  return (
    <div className={ classes.ChooseWindow }>
      { readyLootBoxes }
    </div>
  );
};

export default ChooseWindow;