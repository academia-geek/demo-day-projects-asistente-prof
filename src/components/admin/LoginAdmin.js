import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
    <div className='cardsLoginAll d-flex flex-column'>
      <div className='login '>
        <h1 className='text-center'>Iniciar sesion</h1>
        <Container>
          <Row>
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
                    <p className='d-flex mx-auto w-75 fw-bold'>Correo</p>
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

                    <p className='d-flex mx-auto w-75 fw-bold'> Contraseña</p>
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
            </Col>
          </Row>
          <Row className='my-4'>
            <Col>
            <Link to='/landing'>
              <Button variant="light" className='d-flex m-auto'> <span className="bi bi-arrow-left-circle-fill"></span> Volver a pagina principal</Button>
            </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginAdmin;
