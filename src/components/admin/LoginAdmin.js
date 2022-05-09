import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('debe ser de tipo email example@gmail.com')
    .min(5, 'email muy corto')
    .max(50, 'excede el maximo')
    .required('El email campo es obligatorio'),
  password: Yup.string()
    .min(5, 'muy corta')
    .max(10, 'muy larga')
    .required('el password es obligatorio'),
});

const LoginAdmin = ({ setIsAdminLog }) => {
  const navigate = useNavigate();
  const handleSubmit = ({ email, password }) => {
    if (email === 'user@gmail.com' && password === 'user1234') {
      setIsAdminLog(true);
      navigate('/university');
    } else {
      setIsAdminLog(false);
    }
  };
  return (
    <div className='cardsLoginAll'>
      <Nav
        className='d-flex justify-content-between'
        style={{
          background: '#4B3F6B',
          fontWeight: 'bold',
          backgroundImage: "url('https://i.ibb.co/CngVcj8/descarga-2.png')",
        }}
      >
        <Nav.Item as='li'>
          <Nav.Link href='/landing' className='text-light'>
            Atras
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='login '>
        <Container
          className='shadow p-5 rounded mx-auto my-5'
          style={{ background: '#4B3F6B' }}
        >
          <h1 className='text-center text-light'>Iniciar sesión</h1>
          <Row className='contLogin'>
            <Col>
              <div className='imgLogin'>
                <img
                  className='w-100'
                  src='https://res.cloudinary.com/djjgtili7/image/upload/v1651819978/Account-amico-removebg-preview_v4dehk.png'
                  alt='img'
                />
              </div>
            </Col>
            <Col>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className=' mx-auto '>
                    <p className='d-flex mx-auto w-75 fw-bold text-light'>
                      Correo
                    </p>
                    <Field
                      className='d-flex mx-auto w-75 '
                      placeholder='Email'
                      type='text'
                      style={{ margin: '2%' }}
                      name='email'
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}

                    <p className='d-flex mx-auto w-75 fw-bold text-light'>
                      {' '}
                      Contraseña
                    </p>
                    <Field
                      className='d-flex mx-auto w-75 '
                      placeholder='Password'
                      type='password'
                      style={{ margin: '2%' }}
                      name='password'
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <Button
                      className='d-flex mx-auto w-75 text-center'
                      type='submit'
                      style={{ background: '#2ACFCF' }}
                    >
                      Continue
                    </Button>
                  </Form>
                )}
              </Formik>
              <br />

              <button
                onClick={() => navigate('/landing')}
                variant='light'
                className='d-flex m-auto botones'
              >
                {' '}
                <span className='bi bi-arrow-left-circle-fill'></span> Volver a
                pagina principal
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginAdmin;
