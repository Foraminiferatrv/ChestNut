import React from 'react';

import classes from './Profile.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoinTracker from '../../CoinTracker/CoinTracker';
import MoneyTracker from '../../MoneyTracker/MoneyTracker';

function Profile() {
  return (
    <div className={ classes.ProfileContainer }>
      <Container >
        <Row className="align-items-center" >
          <Col xs="8">
            <Row>
              <CoinTracker />
            </Row>
            <Row>
              <MoneyTracker />
            </Row>
          </Col>
          <Col>
            <div className={ classes.ProfilePic }></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Profile;