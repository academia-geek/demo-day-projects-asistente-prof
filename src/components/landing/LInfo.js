import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import '../../style/landingPage.css'

const LInfo = () => {
    return (
        <div style={{ background: '#4B3F6B' }}>
            <div class="d-flex justify-content-center">
                <Container className='text-center text-light'>
                    <h1 className='text-light fw-bold'> En "Tu Asistente Prof"</h1>
                    <p className='text-light'>Encuentra la información para tu futuro Profesional.</p>
                    <Button className='btnMas '>Ver  mas</Button>
                </Container>
                <Container className='d-flex'>
                    <img className='d-flex margin-auto w-75 ' src="https://res.cloudinary.com/lau2401/image/upload/v1651015886/4002302_1_si42va.png" />
                </Container>
            </div>
            <Container className="my-5">
                <h2 className="text-light text-center py-2" style={{ background: '#7B7784' }}>
                    Estamos aquí para ayudarte.
                </h2>
                <p className="text-light text-center my-5">
                    Podras encontar diferentes espacios para explorar y asi tomar una buena decision.
                </p>
            </Container>

            <div className='d-flex justify-content-between mx-2' style={{ }}>
                <Card className='rounded' style={{ width: '16rem'}}>
                    <Card.Img className='rounded-circle p-2 icon' style={{ width: '50px', background: '#3B3054' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/colegio_1_1_xqgzqd.png" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Encuentra un centro de formacion según tu perfil.</Card.Title>
                        <Card.Text>
                            De acuerto a tu resultado en la prueba CHASIDE te mostrará opciones de Centros de Formacion.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mt-5' style={{ width: '16rem' }}>
                        <Card.Img className='rounded-circle p-2 icon' style={{ width: '50px', background: '#3B3054' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/beca_2_1_1_sziwbd.png" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Enterate de Becas y ofertas academicas.</Card.Title>
                        <Card.Text>
                            Tenemos un registro para que los Ofertantes de Carreras envien información y estar enterado de noticias.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem' }}>
                    <Card.Img className='rounded-circle p-2 icon' style={{ width: '50px', background: '#3B3054' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/beca_2_1_1_sziwbd.png" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Acompañamiento para elegir bien tu vocación.</Card.Title>
                        <Card.Text>
                            Si necesitas que nuestros Asesores en orientacion hablan contigo podras solicitarlo.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LInfo