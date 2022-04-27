import React from 'react'
import { Button, Card } from 'react-bootstrap'

const LInfo = () => {
    return (
        <div>
            <Card className="border-radio15" style={{ width: '36rem', height: '400px' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/lau2401/image/upload/v1651015886/4002302_1_si42va.png" />
                <Card.Body>
                    <Card.Title className="fw-bold" > En "Tu Asistente Prof"</Card.Title>
                    <Card.Text>
                        Encuentra la información para tu futuro Profesional.
                    </Card.Text>
                    <Button variant="primary">Inicia Tu Test</Button>
                </Card.Body>
            </Card>
            <br />
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-bold text-neutral-darkViolet">
                    Estamos aquí para ayudarte.
                </h2>
                <p className="max-w-[480px] font-medium text-neutral-grayishViolet">
                    Podras encontar diferentes espacios para explorar y asi tomar una buena decision.
                </p>
            </div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '50px' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/colegio_1_1_xqgzqd.png" />
                <Card.Body>
                    <Card.Title>Encuentra un centro de formacion según tu perfil.</Card.Title>
                    <Card.Text>
                        De acuerto a tu resultado en la prueba CHASIDE te mostrará opciones de Centros de Formacion.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '50px' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/beca_2_1_1_sziwbd.png" />
                <Card.Body>
                    <Card.Title>Enterate de Becas y ofertas academicas.</Card.Title>
                    <Card.Text>
                        Tenemos un registro para que los Ofertantes de Carreras envien información y estar enterado de noticias.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '50px' }} src="https://res.cloudinary.com/lau2401/image/upload/v1651019668/beca_2_1_1_sziwbd.png" />
                <Card.Body>
                    <Card.Title>Acompañamiento para elegir bien tu vocación.</Card.Title>
                    <Card.Text>
                        Si necesitas que nuestros Asesores en orientacion hablan contigo podras solicitarlo.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default LInfo