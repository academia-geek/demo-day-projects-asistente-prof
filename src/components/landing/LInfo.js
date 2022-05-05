import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import '../../style/landingPage.css';

const LInfo = () => {
  return (
    <div className='py-5' style={{ background: '#4B3F6B' }}>
      <div
        className='d-flex  justify-content-center'
        style={{ background: '#4B3F6B' }}
      >
        <Container className='text-light mx-3 d-flex align-content-around   flex-wrap'>
          <h1 className='text-light fw-bold'> En "Tu Asistente Prof"</h1>
          <p className='text-light'>
            Encuentra la información para tu futuro Profesional.
          </p>
          <br />
          <Button className='btnMas mx-5'>Ver mas</Button>
        </Container>
        <Container className='d-flex'>
          <img
            className='d-flex margin-auto w-100 '
            src='https://res.cloudinary.com/lau2401/image/upload/v1651015886/4002302_1_si42va.png'
            alt=' logo'
          />
        </Container>
      </div>
      <Container className='my-5'>
        <h2
          className='text-light text-center py-2'
          style={{ background: '#544b6b' }}
        >
          Estamos aquí para ayudarte.
        </h2>
        <p className='text-light text-center my-5'>
          Podras encontar diferentes espacios para explorar y asi tomar una
          buena decision.
        </p>
      </Container>
      <div className='d-flex justify-content-around mx-2 flex-wrap' style={{}}>
        <Card className='card-1' style={{ width: '16rem' }}>
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
        <Card className='card-2' style={{ width: '16rem' }}>
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
        <Card className='card-3' style={{ width: '16rem' }}>
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
      <Card className='card-4 m-auto' style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className='fw-bold text-light'>
            Boost your links today
          </Card.Title>
          <Card.Text>
            <Button className='btnMas d-flex m-auto'>Realizar test</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LInfo;
