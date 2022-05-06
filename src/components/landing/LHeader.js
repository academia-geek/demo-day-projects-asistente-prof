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
          <Navbar.Collapse className='' id='basic-navbar-nav'>
            <Nav className='m-auto w-100 d-flex justify-content-end'>
              <Link to='/login' className='m-2'>
                <Button variant='outline-info' className='text-light'>
                  Login
                </Button>
              </Link>
              <Link className='m-2'  to='/register'>
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
