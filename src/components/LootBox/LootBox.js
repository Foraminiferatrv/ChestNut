import React from 'react';

import case4 from '../../assets/img/case1/case4.png';
import classes from './LootBox.module.css';

import Container from 'react-bootstrap/Container/'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function LootBox() {
  return (
    <div className={ classes['LootBox'] }>
      <Container className={ classes['LootBoxContainer']}>
        <Row>
          <Col>
            <img className={ classes['CaseImg'] } src={ case4 } alt="Huntsman Case" />
            <span className={ classes['CaseName'] }>Huntsman Case</span>
          </Col>
        </Row>
        <Row>
          <Col><span className={ classes['CaseInfo'] }>Value Range:</span></Col>
          <Col><span className={ classes['CaseInfo'] }>0.20$ - 70$</span></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LootBox;