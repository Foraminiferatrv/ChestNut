import React from 'react';

import classes from './LootBoxItemsWindow.module.css';

import LootBoxItem from '../../LootBoxItem/LootBoxItem';
import GeneralButton from '../GeneralButton/GeneralButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import picture from '../../../assets/img/case1/HuntsmanCase/10.png'
function LootBoxItemsWindow() {
  return (
    <div className={ classes['LootBoxItemsWindow'] }>
      <div>
        <Container>
          <Row >
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
            <Col className="d-flex justify-content-center"><LootBoxItem name='Tec-9|Isaac' adress={ picture } /></Col>
          </Row>
        </Container>
      </div>
      <div className={ classes['ButtonBlock'] }>
        <Container >
          <Row className='d-flex align-items-center'>

            <Col><GeneralButton color='yellow' name='Buy The Case'/></Col>
            <Col><GeneralButton name='Open The Case'/></Col>
      
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LootBoxItemsWindow;