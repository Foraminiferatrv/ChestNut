import React, { Fragment } from 'react';

import classes from './LootBoxGrid.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LootBox from '../../LootBox/LootBox';

const LootBoxGrid = ( props ) => {

  const lootBoxGreedCreator = ( lootBox ) => {

    const colCreator = ( lootBoxesArray ) => {
      return lootBoxesArray.map( lootBoxData => {
        return <Col className="d-flex justify-content-center" xl="2,4">
          <LootBox
            lootBoxImg={ lootBoxData.img }
            lootBoxName={ lootBoxData.name }
          />
        </Col>
      } );
    }

    const lootBoxArraySplitter = ( lootBoxArray ) => {
      let unsortedArray = [...lootBoxArray];
      let sortedArray = [];

      for ( let i = 0; i <= Math.ceil(lootBoxArray.length/5); i++ ) {
        sortedArray = [...sortedArray, unsortedArray.splice( 0, 5 )];
      }
      return sortedArray;
    }

    const rowCreator = ( splitedLootboxes ) => {
      return splitedLootboxes.map( fiveLootBoxes => {
        return <Row className="" xl="5">
          { fiveLootBoxes }
        </Row>
      } );
    }

    return rowCreator( lootBoxArraySplitter( colCreator( lootBox ) ) );
  };
  const readyLootBoxes = lootBoxGreedCreator( props.lootBoxesArray );

  return (
    <Container >
        { readyLootBoxes }
    </Container>
  );
};

export default LootBoxGrid; 