import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { paintCareerAsync } from '../redux/actions/actionUniversity';
import '../style/unis.css';
import SearchUnis from './SearchUnis';

export const Unis = () => {
    const dispatch = useDispatch();
    const { careeries } = useSelector((store) => store.careeries);

    useEffect(() => {
        dispatch(paintCareerAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='py-5' style={{ background: '#4B3F6B' }}>
            <h2 className='text-center text-light fw-bold'>
                Carreras universitarias
            </h2>
            <SearchUnis />
            <h2 className='text-light w-75 m-auto'>Resultados: {careeries.length}</h2>

            <div
                className='py-5 d-flex justify-content-between flex-wrap'
                style={{ width: '100%' }}
            >
                {careeries.map((carrera, index) => (
                    <Container
                        className='d-flex my-3 bg-white rounded'
                        style={{ minWidth: '500px', maxWidth: '700px' }}
                        key={carrera.idCarrera}
                    >
                        <div className='m-auto d-flex' style={{ width: '150px' }}>
                            <Card.Img
                                className='border border-3 rounded'
                                style={{ width: '100%' }}
                                variant='top'
                                src={
                                    carrera.sigla === 'unal'
                                        ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556835/u/unal_txtgip.png'
                                        : carrera.sigla === 'ecci'
                                            ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556836/u/ecci_vsmyre.png'
                                            : carrera.sigla === 'utap'
                                                ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556836/u/utap_tonkbm.png'
                                                : carrera.sigla === 'puj'
                                                    ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556839/u/puj_wggjl8.png'
                                                    : 'https://thumbs.dreamstime.com/b/sin-foto-ni-icono-de-imagen-en-blanco-cargar-im%C3%A1genes-o-falta-marca-no-disponible-pr%C3%B3xima-se%C3%B1al-silueta-naturaleza-simple-marco-215973362.jpg'
                                }
                            />
                        </div>
                        <Card.Body>
                            <Card.Title className='fs-3'>
                                {carrera.carrera}{' '}
                                <span
                                    className='bi bi-star-fill'
                                    style={{ color: '#6ee6e6', float: 'right' }}
                                ></span>
                            </Card.Title>
                            <button
                                className='rounded-pill py-1 px-4'
                                id={carrera.area}
                                style={{ border: ' 2px solid fff' }}
                            >
                                {carrera.area === 'c'
                                    ? 'Administrativas y Contables'
                                    : carrera.area === 'h'
                                        ? ' Humanísticas y Sociales '
                                        : carrera.area === 'a'
                                            ? ' Artísticas'
                                            : carrera.area === 's'
                                                ? 'Medicina y Cs. de la Salud '
                                                : carrera.area === 'i'
                                                    ? 'Ingeniería y Computación'
                                                    : carrera.area === 'd'
                                                        ? 'Defensa y Seguridad'
                                                        : 'Ciencias Exactas y Agrarias'}
                            </button>
                            <Card.Text>
                                <p>
                                    <span className='fw-bold fs-5'>Academia: </span>
                                    {carrera.universidad}
                                </p>
                                <p>
                                    <span className='fw-bold fs-5'>
                                        Titulo de formacion ofertada:{' '}
                                    </span>{' '}
                                    {carrera.titulo}{' '}
                                </p>
                                <p className='text-uppercase'>
                                    <span className='fw-bold fs-6 text-capitalize'>Sigla: </span>
                                    {carrera.sigla}
                                </p>
                                <p>
                                    <span className='fw-bold'>Duracion: </span> {carrera.duracion}{' '}
                                    semestres
                                </p>
                                <a
                                    href={carrera.url}
                                    className='fw-bold'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Ver carrera{' '}
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Container>
                ))}
            </div>
        </div>
    );
};
