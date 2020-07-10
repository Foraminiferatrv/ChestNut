import React from 'react';

import classes from './LootBox.module.css';

import Container from 'react-bootstrap/Container/'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LootBox = ( props ) => {
  return (
    <div className={ classes.LootBox }>
      <Container className={ classes.LootBoxContainer }>
        <Row>
          <Col>
            <div className={classes.crop}>
              <img className={ classes.CaseImg } src={ props.lootBoxImg } alt={ props.LootBoxName } />
            </div>
            <span className={ classes['CaseName'] }>{ props.lootBoxName }</span>
          </Col>
        </Row>
        <Row>
          {/* <Col><span className={ classes['CaseInfo'] }>Value Range:</span></Col> */}
          {/* <Col><span className={ classes['CaseInfo'] }>{ props.valueRange }</span></Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default LootBox;