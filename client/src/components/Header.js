import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { fetchSettings } from '../actions';

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

  renderWelcomeText() {
    if (this.props.isSignedIn) {
      const firstName = this.props.fullName
        .split(/(\s).+\s/)
        .join('')
        .split(' ')[0];
      return (
        <>
          <Navbar.Text className='pr-3'>Welcome {firstName}</Navbar.Text>
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
              {this.renderWelcomeText()}
              <GoogleAuth />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, fullName: state.auth.fullName };
};

export default connect(mapStateToProps, { fetchSettings })(Header);
