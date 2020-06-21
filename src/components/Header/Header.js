import React from 'react';

import classes from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';

function Header() {
  return (
    <header className={ classes.Header }>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="2"> <Logo /></Col>
          <Col xs="4"> <NavBar /></Col>
          <Col xs="2"><Profile  /></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;