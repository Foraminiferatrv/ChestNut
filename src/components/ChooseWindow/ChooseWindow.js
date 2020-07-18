import React from 'react';

import classes from './ChooseWindow.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LootBox from '../LootBox/LootBox';


const ChooseWindow = ( { lootBoxesArray, clicked } ) => {

  const readyLootBoxes = lootBoxesArray.map( lootBoxData => {
    return ( <LootBox
      lootBoxImg={ lootBoxData.img }
      lootBoxName={ lootBoxData.name }
      items={ lootBoxData.items }
      clicked={ clicked }
    /> );

  } );
  return (
    <Container className={ classes.ChooseWindow }>
      { readyLootBoxes }

    </Container>
  );
};

export default ChooseWindow;