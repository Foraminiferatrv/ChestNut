import React from 'react';

import classes from './ChooseWindow.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LootBox from '../../LootBox/LootBox';

function ChooseWindow() {
  return (
    <Container className={classes['ChooseWindow']}>
      <Row >
        <Col>
          <LootBox/>
        </Col>
      
      </Row>
    </Container>
  );
};

export default ChooseWindow;