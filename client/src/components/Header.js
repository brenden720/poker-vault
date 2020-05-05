import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <Navbar className='navbar navbar-expand-sm navbar-dark bg-dark p-0'>
      <Container>
        <Navbar.Brand as={Link} to='/sessions' className='pl-3'>
          Poker Vault
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/sessions'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to='/sessions/settings'>
              Settings
            </Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <GoogleAuth />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
