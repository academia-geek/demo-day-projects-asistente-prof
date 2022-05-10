import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../style/landingPage.css';

const LInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='py-5 my-5' style={{ background: '#eee' }}>
      <div className='d-flex my-4 py-5 shadow rounded justify-content-center flex-wrap'>
        <Container
          className=' mx-auto my-2 text-light d-flex align-content-around flex-wrap'
          style={{ maxWidth: '700px' }}
        >
          <div className='m-auto d-flex flex-column p-5'>
            <h1 className=' fw-bold'> En "Tu Asistente Prof"</h1>
            <p className='fs-6'>
              Podras ampliar tu visión hacia tu formación académica para ser
              profesional. Además tendras acceso a información sobre
              universidades e institutos de formación profesional, con todo lo
              que te ofrece cada una de estas instituciones para que atravez de
              esta página tengas una informacion mas clara y una guia sobre cual
              es tu mejor elección y las posibilidades de acceder a tu carrera
              en mente.{' '}
            </p>
            <br />
            <Button
              variant='light'
              onClick={() => navigate('/login')}
              className='btnVerMas botMore-btn  '
            >
              Comenzar Test
            </Button>
          </div>
        </Container>
        <Container className=' d-flex ' style={{ maxWidth: '500px' }}>
          <img
            className='d-flex margin-auto w-100 '
            src='https://res.cloudinary.com/lau2401/image/upload/v1651015886/4002302_1_si42va.png'
            alt=' logo'
          />
        </Container>
      </div>
      <Card className='my-5 mx-0'>
        <h2
          className='card-h2 text-center py-5 text-light'
          // style={{ background: '#544b6b' }}
        >
          Estamos aquí para ayudarte.
        </h2>
        <p className='text-center my-5 fs-3'>
          Podras encontar diferentes espacios para explorar y asi tomar una
          buena decision.
        </p>
      </Card>
      <div className='d-flex justify-content-around mx-2 flex-wrap'>
        <Card className='card-1 shadow-lg' style={{ width: '20rem' }}>
          <Card.Img
            className='rounded-circle p-2 icon'
            style={{ width: '50px', background: '#3B3054' }}
            src='https://res.cloudinary.com/lau2401/image/upload/v1651019668/colegio_1_1_xqgzqd.png'
          />
          <Card.Body>
            <Card.Title className='fw-bold'>
              Encuentra un centro de formacion según tu perfil.
            </Card.Title>
            <Card.Text>
              De acuerto a tu resultado en la prueba CHASIDE te mostrará
              opciones de Centros de Formacion.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card-2 shadow-lg' style={{ width: '20rem' }}>
          <Card.Img
            className='rounded-circle p-2 icon'
            style={{ width: '50px', background: '#3B3054' }}
            src='https://res.cloudinary.com/lau2401/image/upload/v1651019668/beca_2_1_1_sziwbd.png'
          />
          <Card.Body>
            <Card.Title className='fw-bold'>
              Enterate de Becas y ofertas academicas.
            </Card.Title>
            <Card.Text>
              Tenemos un registro para que los Ofertantes de Carreras envien
              información y estar enterado de noticias.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card-3 shadow-lg' style={{ width: '20rem' }}>
          <Card.Img
            className='rounded-circle p-2 icon'
            style={{ width: '50px', background: '#3B3054' }}
            src='https://i.ibb.co/mS39Kv3/auricular-1-1.png'
          />
          <Card.Body>
            <Card.Title className='fw-bold'>
              Acompañamiento para elegir bien tu vocación.
            </Card.Title>
            <Card.Text>
              Si necesitas que nuestros Asesores en orientacion hablan contigo
              podras solicitarlo.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Card className='card-4 m-auto'>
        <Card.Body>
          <Card.Title className='fw-bold text-center fs-1 text-light my-3'>
            ¿Quieres saber más?
          </Card.Title>
          <Button
            onClick={() => navigate('/contactanos')}
            variant='info'
            className=' d-flex m-auto w-25 justify-content-center px-3 fs-6 botMore-btn '
          >
            Contactanos
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LInfo;
