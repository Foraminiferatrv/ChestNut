import React from 'react';

import classes from './ChooseWindow.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LootBox from '../LootBox/LootBox';

function ChooseWindow() {
  return (
    <Container className={ classes['ChooseWindow'] }>
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
      </Row>
    </Container>
  );
};

export default ChooseWindow;