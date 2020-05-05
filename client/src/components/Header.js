import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <Navbar className='navbar navbar-expand-sm navbar-dark bg-dark p-0'>
      <Container>
        <Navbar.Brand href='#' className='pl-3'>
          Poker Vault
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#'>Dashboard</Nav.Link>
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
