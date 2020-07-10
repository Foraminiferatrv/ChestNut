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

  ////////////////////////////////////////////////////////////////////////


  const lootBoxGreedCreator = ( lootBoxesArray ) => {
    const lootBoxArraySplitter = ( lootBoxArray ) => {
      let unsortedArray = lootBoxArray;
      let sortedArray = [];

      for ( let i = 0; i < unsortedArray.length; i++ ) {
        sortedArray = [...sortedArray, unsortedLootBoxes.splice( 0, 5 )];
      }
      return sortedArray;
    }


    const unsortedLootBoxes = lootBoxesArray.map( lootBoxData => {
      return <Col className="d-flex justify-content-center" xl="2,4">
        <LootBox
          lootBoxImg={ lootBoxData.img }
          lootBoxName={ lootBoxData.name }
        />
      </Col>
    } );

    const splitedLootboxes = lootBoxArraySplitter( unsortedLootBoxes );

    const lootBoxRow = splitedLootboxes.map( fiveLootBoxes => {
      return <Row>
        { fiveLootBoxes }
      </Row>
    } );

    return lootBoxRow;
  };

  const readyLootBoxes = lootBoxGreedCreator( lootBoxes );
  ////////////////////////////////////////////////////////////////////////
  return (
    <Container className={ classes['ChooseWindow'] }>
      <LootBoxGrid lootBoxesArray={lootBoxes}/>
    </Container>
  );
};

export default ChooseWindow;