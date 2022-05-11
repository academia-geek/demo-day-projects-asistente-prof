import { Nav, Button, Navbar, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';

const NavBars = ({ userV, numero }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { displayName } = userV;

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
    localStorage.removeItem('answers');
    localStorage.removeItem('letters');
    localStorage.removeItem('conter');
    localStorage.removeItem('user');
    localStorage.removeItem('f');
  };

  return (
    <div>
      <Navbar
        fixed='top'
        style={{ background: '#4B3F6B', padding: '0px' }}
        expand='lg'
      >
        <Container>
          <img
            onClick={() => navigate('/')}
            className='logoNav '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651816474/Tu_Asistente_prof_gz6wjm.png'
            alt='logo'
          ></img>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto' style={{ gap: '10px' }}>
              <Link to='/' className='mx-2'>
                <Button
                  className='fs-6'
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  {numero === 98 ? 'Resultados' : 'Test'}
                </Button>
              </Link>
              <Link to='/unis' className='mx-2'>
                <Button
                  className='fs-6'
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Universidades
                </Button>
              </Link>
              <Link to='/favorites' className='mx-2'>
                <Button
                  className='fs-6'
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Favoritos
                </Button>
              </Link>
            </Nav>
            <Nav
              className='mx-auto my-2 w-100 d-flex justify-content-end '
              style={{ gap: '10px' }}
            >
              <Link to={numero === 98 ? '/perfil' : '/'} className='mx-4 '>
                <Button
                  variant='outline-info'
                  className='mx-4  fsize7 fw-bold iconHover2 '
                >
                  <span className='text-light fw-light'>Hola,</span>{' '}
                  {displayName}
                </Button>
              </Link>

              <Button
                className='fw-bold logout-btn iconHover fsize7 '
                style={{ background: 'transparent' }}
                onClick={() => {
                  handleLogout();
                  navigate('/landing');
                }}
              >
                <i className='bi bi-box-arrow-left fs-6 px-2 text-danger  '></i>{' '}
                Cerrar sesion{' '}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;
