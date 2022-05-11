import React from 'react';
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { registerAsync } from '../redux/actions/actionRegister';

const Register = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    pass1: '',
    pass2: '',
  });

  const { nombre, email, pass1, pass2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(email, pass1, nombre));
    localStorage.setItem('answers', JSON.stringify([]));
    localStorage.setItem('conter', JSON.stringify(0));
    localStorage.setItem('letters', JSON.stringify([0, 0, 0, 0, 0, 0, 0]));

    reset();
  };

  return (
    <div>
      <Container className='shadow p-5 rounded mx-auto my-5'>
        <Nav className='d-flex justify-content-between'>
          <Nav.Item as='li'>
            <Nav.Link href='/landing' className=' text-dark fs-5'>
            <span className='text-dark bi bi-arrow-left-circle-fill'></span> Atras
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 className='text-center mx-4' style={{ fontSize: '60px' }}>
          Registrarse
        </h1>
        <Row>
          <Col>
            <Form.Label>Nombre (obligatorio)</Form.Label>
          </Col>
          <Col>
            <Form.Label>Apellido (obligatorio)</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3 d-flex '>
                <Form.Control
                  type='text'
                  placeholder='Enter name'
                  name='nombre'
                  value={nombre}
                  onChange={handleInputChange}
                />
                <Form.Control type='text' placeholder='Enter lastName' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Correo (obligatorio)</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='email'
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='pass1'
                  value={pass1}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicRepitPassword'>
                <Form.Label>Repita contraseña</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='pass2'
                  value={pass2}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <button
                type='submit'
                className='text-center d-flex mx-auto btones-btn my-4'
                style={{ background: '#6ee6e6' }}
              >
                Registrarse
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className='fw-normal'>
          Al hacer clic en "Regístrate", aceptas las condiciones de uso de
          “Asistente Prof ” y reconoces haber leído la política de privacidad.
        </p>
        <img
          className='d-flex m-auto w-100'
          src='https://i.ibb.co/3shb2pT/3785210-removebg-preview-1.png'
          alt='people'
        ></img>
      </Container>
    </div>
  );
};

export default Register;
