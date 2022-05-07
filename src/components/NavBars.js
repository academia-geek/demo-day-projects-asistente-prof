import { useEffect, useState } from 'react';
import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';
import { paintUserAsync } from '../redux/actions/actionUsers';

const NavBars = ({ userV, numero }) => {
  //cerrar sesion
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName, uid } = userV;

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
    localStorage.clear();
  };

  return (
    <div>
      <Navbar fixed="top" style={{ background: "#4B3F6B"}} expand='lg'>
        <Container>
        <img
            className='logoNav'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651816474/Tu_Asistente_prof_gz6wjm.png'
            alt='logo'
          ></img>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto' style={{ gap: '10px' }}>
              <Link to='/perfil' className='mx-4'>
                <Button variant='outline-info'>Perfil</Button>
              </Link>
              <Link to='/' className='mx-4'>
                <Button variant='outline-info'>
                  {numero === 98 ? 'Resultados' : 'Test'}
                </Button>
              </Link>
              <Link to='/unis' className='mx-4'>
                <Button variant='outline-info'>Universidades</Button>
              </Link>
              <Link to='/favorites' className='mx-4'>
                <Button variant='outline-info'>Favoritos</Button>
              </Link>
            </Nav>
            <Nav className='mx-auto my-2 w-100 d-flex justify-content-end ' style={{ gap: '10px' }}>
              <Button variant='outline-info' className='mx-4 text-light'>
                Hola,
                <span className=' fw-bold text-light'> {displayName}</span>
              </Button>
              <Link to='/register' className='mx-4' onClick={handleLogout}>
                <Button variant='info' style={{ background: '#6ee6e6' }}>
                  <i className='bi bi-box-arrow-left'></i> Cerrar sesion{' '}
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;
