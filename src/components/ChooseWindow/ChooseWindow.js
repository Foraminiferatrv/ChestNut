import React, { useEffect, useState } from 'react';

import classes from './ChooseWindow.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LootBox from '../LootBox/LootBox';
import LootBoxGrid from '../containers/LootBoxGrid/LootBoxGrid';


const ChooseWindow = () => {
  const [lootBoxes, setLootBoxes] = useState( [] );

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
            img: responseData[key].img
          } );
        }
        setLootBoxes( loadedLootBoxes );
      } ).catch( error => console.log( 'Something went wrong' + error ) )
  }, [] );

  return (
    <Container className={ classes['ChooseWindow'] }>
      <LootBoxGrid lootBoxesArray={lootBoxes}/>
    </Container>
  );
};

export default ChooseWindow;