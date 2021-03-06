import { useDispatch } from 'react-redux';
import {
  loginEmailPassAsync,
  loginFacebook,
  loginGoogle,
} from '../../redux/actions/actionLogin';
import { Formik, Field, Form } from 'formik';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
      if (conterLogin === 0) {
        Swal.fire({
          title: 'Bienvenido',
          text: 'A continuación van a realizar un test de 98 preguntas donde tienen como resultado sus habilidades y aptitudes que ayudaran a encontar la carrera que se adapta a su perfil. " SOLO PODRAS REALIZAR EL TEST 2 VECES "',
          icon: 'exito',
          confirmButtonText: 'Realizar Test',
        });
      }
    }, 2500);
  };
  const handleFacebook = () => {
    dispatch(loginFacebook(conterLogin));
    setTimeout(() => {
      if (conterLogin === 0) {
        Swal.fire({
          title: 'Bienvenido',
          text: 'A continuación van a realizar un test de 98 preguntas donde tienen como resultado sus habilidades y aptitudes que ayudaran a encontar la carrera que se adapta a su perfil. " SOLO PODRAS REALIZAR EL TEST 2 VECES "',
          icon: 'exito',
          confirmButtonText: 'Realizar Test',
        });
      }
    }, 2500);
  };

  return (
    <div className='login ' style={{ background: '#eee', height: '120vh', paddingTop: '50px'}}>

      <Container className='shadow bg-light p-5 rounded mx-auto '>
        <Nav className='d-flex justify-content-between'>
          <Nav.Item as='li'>
            <Nav.Link href='/landing' className=' text-dark  fs-5'>
              <span className='text-dark bi bi-arrow-left-circle-fill'></span>  Atras
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 className='text-center'>Iniciar sesión</h1>
        <Row className='contLogin'>
          <Col>
            <div className='imgLogin'>
              <img
                className='w-100'
                src='https://res.cloudinary.com/djjgtili7/image/upload/v1651817640/Mobile_login-pana-removebg-preview_yntomq.png'
                alt='img'
              />
            </div>
          </Col>
          <Col className=' m-auto'>
            <Container
              className='google-icon-wrapper d-flex   w-75 my-2 px-2  cursorp'
              onClick={handleGoogle}
            >
              <span className='d-flex  gap-5 google-btn iWhite '>
                <i className='bi bi-google text-danger fs-5 iWhite   '></i>
                Continuar con Google
              </span>
            </Container>
            <Container
              className='google-icon-wrapper d-flex w-75 my-2 px-2 cursorp'
              onClick={handleFacebook}
            >
              <span className='d-flex  gap-5  google-btn iWhite'>
                <i className='bi bi-facebook text-info fs-5'></i>
                Continuar con Facebook
              </span>
            </Container>
            <p className='text-center my-4 fw-bold fs-4'>O</p>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                dispatch(
                  loginEmailPassAsync(
                    values.email,
                    values.password,
                    conterLogin
                  )
                );
                if (conterLogin === 0) {
                  Swal.fire({
                    title: 'Bienvenido',
                    text: 'A continuación van a realizar un test de 98 preguntas donde tienen como resultado sus habilidades y aptitudes que ayudaran a encontar la carrera que se adapta a su perfil. " SOLO PODRAS REALIZAR EL TEST 2 VECES "',
                    icon: 'exito',
                    confirmButtonText: 'Realizar Test',
                  });
                } else {
                  Swal.fire({
                    title: 'Contraseña o Usuario equivocado',
                    icon: 'error',
                  });
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className=' mx-auto my-2'>
                  <p className='d-flex mx-auto w-75 fw-bold'>Correo</p>
                  <Field
                    className='d-flex mx-auto w-75 px-2 '
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
                    className='d-flex mx-auto w-75 px-2'
                    placeholder='Password'
                    type='password'
                    style={{ margin: '2%' }}
                    name='password'
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <button
                    className='d-flex mx-auto w-75 text-center continuar-btn'
                    type='submit'
                    style={{ background: '#6ee6e6' }}
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
            <Link to='/register' className='text-info text-center  d-flex w-75 m-auto ' style={{ textDecoration: 'none' }}>
              Crear Cuenta
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
