import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';

const NavBars = ({ userV }) => {
  //cerrar sesion
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName, email } = userV;

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
    localStorage.setItem('answers', JSON.stringify([]));
    localStorage.setItem('conter', JSON.stringify(85));
    localStorage.setItem('letters', JSON.stringify([0, 0, 0, 0, 0, 0, 0]));
    localStorage.setItem('user', JSON.stringify());
  };

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
            <Nav className='me-auto'>
              <Link to='/' className='mx-4'>
                <Button variant='outline-info'>Test</Button>
              </Link>
              <Link to='/unis' className='mx-4'>
                <Button variant='outline-info'>Universidades</Button>
              </Link>
              <Link to='/favorites' className='mx-4'>
                <Button variant='outline-info'>Favorites</Button>
              </Link>
            </Nav>
            <Nav className='me-auto w-100 d-flex justify-content-end'>
              <h5>Hola, {displayName} </h5>
              <Link to='/register' onClick={handleLogout}>
                <Button style={{ background: '#6ee6e6' }}>
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
