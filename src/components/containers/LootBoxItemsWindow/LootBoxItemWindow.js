
import React from 'react';

import classes from './LootBoxItemsWindow.module.css';

import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import GeneralButton from '../../UI/GeneralButton/GeneralButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LootBoxItemsWindow = ( { itemsArray } ) => {

  const readyItems = itemsArray.map( itemData => {
    return (
      <LootBoxItem
        name={ itemData.name }
        adress={ itemData.img }
      /> );
  } );

  return (

    <Container className={ classes.LootBoxItemsWindow }>
      <div className={ classes.ItemsContainer }>
        { readyItems }
      </div>
      <div className={ classes.ButtonBlock }>
        <GeneralButton color='yellow' name='Buy The Case' />
        <GeneralButton name='Open The Case' />
      </div>
    </Container>

  );
}

export default LootBoxItemsWindow;