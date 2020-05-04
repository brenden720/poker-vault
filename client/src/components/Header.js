import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='navbar navbar-expand-sm navbar-dark bg-dark p-0'>
      <Container>
        <Navbar.Brand href='#'>Poker Vault</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
