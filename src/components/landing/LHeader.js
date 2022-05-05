import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style/landingPage.css';

const LHeader = () => {
  return (
    <div>
      <Navbar style={{ background: '#4B3F6B' }} expand='lg'>
        <Container>
          <img
            width='3%'
            src='https://i.ibb.co/4fh24Gm/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png'
            alt='logo'
          ></img>
          <Navbar.Brand href='#home' className='text-light fw-bold'>
            Asistente prof
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto  '>
              <Nav.Link className='text-secondary'>Home</Nav.Link>
              <Nav.Link className='text-secondary'>Link</Nav.Link>
            </Nav>
            <Nav className='me-auto w-100 d-flex justify-content-end'>
              <Link to='/login'>
                <Button variant='outline-info' className='mx-2 text-light'>
                  Login
                </Button>
              </Link>
              <Link  to='/register'>
                <Button variant='info' style={{ background: '#6ee6e6' }}>
                  Crear cuenta
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LHeader;
