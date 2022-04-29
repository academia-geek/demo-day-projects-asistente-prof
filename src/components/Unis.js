import React from 'react'
import { Card, Container } from 'react-bootstrap'

export const Unis = () => {
    return (
        <div className='py-5 d-flex' style={{ background: '#4B3F6B' }}>
            <div className='py-5 d-flex justify-content-between flex-wrap' style={{ width: '100%' }}>

                <Container className='d-flex my-3 bg-white' style={{ minWidth: '500px',  maxWidth: '700px' }}>
                    <div className='m-auto d-flex' style={{ width: '150px' }}>
                        <Card.Img className='border border-3 rounded' style={{ width: '100%' }} variant="top" src="https://i.ibb.co/R46Z3hP/Logo-de-la-Universidad-El-Bosque-svg.png" />
                    </div>
                    <Card.Body>
                        <Card.Title className='fs-3'>Universidad El Bosque <span class="bi bi-star-fill" style={{ color: '#6ee6e6', float: 'right' }}></span></Card.Title>
                        <button className='rounded-pill py-1 px-4' style={{ background: '#94e7e7', border: ' 2px solid fff' }}>Ciencias Exactas y Agrarias </button>
                        <Card.Text>
                            <p><span className='fw-bold fs-5'>Titulo: </span> Licenciatura de Ciencias Sociales</p>
                            <p><span className='fw-bold fs-5'>Titulo de formacion ofertada: </span> Profesional </p>
                            <p><span className='fw-bold'>Duracion: </span> 10 semestres</p>
                            <a href='https://www.unbosque.edu.co/' className='fw-bold' target="_blank" rel='noreferrer'>Ver carrera </a>
                        </Card.Text>
                    </Card.Body>
                </Container>
                <Container className=' d-flex my-3 bg-white' style={{ minWidth: '500px',  maxWidth: '700px' }}>
                    <div className='m-auto d-flex' style={{ maxWidth: '150px' }}>
                        <Card.Img className='border border-3 rounded' style={{ width: '100%' }} variant="top" src="https://i.ibb.co/WxZdyQ2/Osv-Nas-C-400x400-removebg-preview.png" />
                    </div>
                    <Card.Body>
                        <Card.Title className='fs-3'>Universidad de La sabana<span class="bi bi-star-fill" style={{ color: '#6ee6e6', float: 'right' }}></span></Card.Title>
                        <button className='rounded-pill py-1 px-4' style={{ background: '#ff8080', border: ' 2px solid fff' }}>Ciencias Exactas y Agrarias </button>
                        <Card.Text>
                            <p><span className='fw-bold fs-5'>Titulo: </span> Administrativas y Contables </p>
                            <p><span className='fw-bold fs-5'>Titulo de formacion ofertada: </span> Profesional </p>
                            <p><span className='fw-bold'>Duracion: </span> 9 semestres</p>
                            <a href='https://www.unisabana.edu.co/' className='fw-bold' target="_blank" rel='noreferrer'>Ver carrera </a>
                        </Card.Text>
                    </Card.Body>
                </Container>
                <Container className=' d-flex my-3 bg-white' style={{ minWidth: '500px',  maxWidth: '700px' }}>
                    <div className='m-auto d-flex' style={{ width: '150px' }}>
                        <Card.Img className='border border-3 rounded' style={{ width: '100%' }} variant="top" src="https://i.ibb.co/WxZdyQ2/Osv-Nas-C-400x400-removebg-preview.png" />
                    </div>
                    <Card.Body>
                        <Card.Title className='fs-3'>Universidad de La sabana<span class="bi bi-star-fill" style={{ color: '#6ee6e6', float: 'right' }}></span></Card.Title>
                        <button className='rounded-pill py-1 px-4' style={{ background: '#ff8080', border: ' 2px solid fff' }}>Ciencias Exactas y Agrarias </button>
                        <Card.Text>
                            <p><span className='fw-bold fs-5'>Titulo: </span> Administrativas y Contables </p>
                            <p><span className='fw-bold fs-5'>Titulo de formacion ofertada: </span> Profesional </p>
                            <p><span className='fw-bold'>Duracion: </span> 9 semestres</p>
                            <a href='https://www.unisabana.edu.co/' className='fw-bold' target="_blank" rel='noreferrer'>Ver carrera </a>
                        </Card.Text>
                    </Card.Body>
                </Container>
            </div>
        </div>
    )
}
