import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';

import Auth from '../../utils/auth';

const AppNavbar = (props) => {
  const {setPageSelected} = props
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            React Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
            <Nav className='ml-auto'>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <br></br>
                <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
                </>
              )}
              <br></br><br></br>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
