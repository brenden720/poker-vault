import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
  renderHeaderLinks() {
    if (this.props.isSignedIn) {
      return (
        <>
          <Nav.Link as={Link} to='/sessions'>
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to='/sessions/settings'>
            Settings
          </Nav.Link>
        </>
      );
    } else {
      return null;
    }
  }

  render() {
    const { isSignedIn } = this.props;
    return (
      <Navbar className='navbar navbar-expand-sm navbar-dark bg-dark p-0'>
        <Container>
          <Navbar.Brand
            as={Link}
            to={isSignedIn ? '/sessions' : '/'}
            className='pl-3'
          >
            Poker Vault
          </Navbar.Brand>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>{this.renderHeaderLinks()}</Nav>
            <Nav className='ml-auto'>
              <GoogleAuth />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

// export default Header;

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
