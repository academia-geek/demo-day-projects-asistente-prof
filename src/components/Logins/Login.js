import { useDispatch } from 'react-redux';
import {
  loginEmailPassAsync,
  loginFacebook,
  loginGoogle,
} from '../../redux/actions/actionLogin';
import { Formik, Field, Form } from 'formik';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';

import * as Yup from 'yup';
import '../../style/style.css';
import Swal from 'sweetalert2';


//----------------Validacion de cada input -----------
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

export const Login = ({ userV, conterLogin }) => {
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
    setTimeout(() => {
      if (conterLogin === 85) {
        Swal.fire({
          title: 'Bienvenido',
          text: 'A continuación van a realizar un test de 98 preguntas donde tienen como resultado sus habilidades y actitudes que ayudaran a encontar la carrera que se adapta a su perfil.',
          icon: 'exito',
          confirmButtonText: 'Realizar Test'
        })
      }
    }, 2000);

  };
  const handleFacebook = () => {
    dispatch(loginFacebook(conterLogin));

  };

  return (
    <div className='login '>
      <Nav className='d-flex justify-content-between' style={{
        background: '#4B3F6B',
        fontWeight: 'bold',
        backgroundImage: "url('https://i.ibb.co/CngVcj8/descarga-2.png')",
      }}>
        <Nav.Item as='li'>
          <Nav.Link href='/landing' className='text-light'>
            Atras
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Nav.Link href='/register' className='text-light'>
            Crear Cuenta
          </Nav.Link>
        </Nav.Item>

      </Nav>
      <Container className='shadow p-5 rounded mx-auto my-5 '>
        <h1 className='text-center'>Iniciar sesión</h1>
        <Row className='contLogin'>
          <Col >
            <div className='imgLogin'>
              <img className='w-100' src='https://res.cloudinary.com/djjgtili7/image/upload/v1651817640/Mobile_login-pana-removebg-preview_yntomq.png' alt='img' />
            </div>
          </Col>
          <Col className=' m-auto'>
              <Container
                className='google-icon-wrapper d-flex border w-75 my-2 '
                onClick={handleGoogle}
              >
                <span className='d-flex m-auto'>
                  <i class="bi bi-google text-secondary"></i>

                  Continuar con google
                </span>
              </Container>
              <Container
                className='google-icon-wrapper d-flex border w-75 my-2'
                onClick={handleFacebook}
              >
                <span className='d-flex m-auto'>
                  <i class="bi bi-facebook text-info"></i>
                  Continuar con facebook
                </span>
              </Container>
              <p className='text-center my-4'>O</p>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  dispatch(loginEmailPassAsync(values.email, values.password, conterLogin));
                }}
              >
                {({ errors, touched }) => (
                  <Form className=' mx-auto my-2'>
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
      </Container>
    </div>
  );
};
