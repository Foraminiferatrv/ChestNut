import React, { useEffect, useState } from 'react';

import classes from './ChooseWindow.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LootBox from '../LootBox/LootBox';

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
        console.log( loadedLootBoxes );
        console.log( lootBoxes );
      }
      ).then( console.log( lootBoxes ) );
  }, [] );

  let readyLootBox = lootBoxes.map( lootBoxData => {
    return <Col className="d-flex justify-content-center">
      <LootBox
        lootBoxImg={ lootBoxData.img }
        lootBoxName={ lootBoxData.name }
      />
    </Col>
  } );

  return (
    <Container className={ classes['ChooseWindow'] }>
      <Row >
        { readyLootBox }
      </Row>
      {/* <Row>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"><LootBox /></Col>
        <Col className="d-flex justify-content-center"></Col>
      </Row>
      <Row >
        <Col className="d-flex justify-content-center"><LootBox /></Col>
        <Col className="d-flex justify-content-center"><LootBox /></Col>
        <Col className="d-flex justify-content-center"><LootBox /></Col>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"><LootBox /></Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"></Col>
        <Col className="d-flex justify-content-center"><LootBox /></Col>
        <Col className="d-flex justify-content-center"></Col>
      </Row> */}
    </Container>
  );
};

export default ChooseWindow;