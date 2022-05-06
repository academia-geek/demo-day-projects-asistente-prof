import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style/landingPage.css';

const LHeader = () => {
  return (
    <div>
      <Navbar fixed="top" style={{ background: '#4B3F6B',
    }} expand='lg'>
        <Container>
          <img
            className='logoNav'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651816474/Tu_Asistente_prof_gz6wjm.png'
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
