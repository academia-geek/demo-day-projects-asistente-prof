import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    deleteAllFavorites,
    getFavorites,
} from '../helpers/favoriteLocalStorage';
import '../style/unis.css';

export const Favorites = () => {
    const navigate = useNavigate();
    const [dataf, setdataf] = useState([]);

    const favoriteStar = (car) => {
        deleteAllFavorites(car.idCarrera);
        setTimeout(() => {
            const data = getFavorites();
            setdataf(data);
        }, 1000);
    };

    useEffect(() => {
        const data = getFavorites();
        if (data == null) {
        } else {
            setdataf(data);
        }
    }, [setdataf]);
    return (
        <div className=' py-5' style={{ background: '#eee', height: '130vh' }}>
            <h2 className='text-center my-5 fw-bold  titleUni'>
                Tus Carreras Favoritas
            </h2>

            <div
                className=' d-flex justify-content-between flex-wrap '
                style={{ width: '100%' }}
            >
                {dataf.length === 0 ? (
                    <div className='w-75 d-flex justify-content-between flex-column align-items-center mx-auto'>
                        <div className='bg-light d-flex flex-column justify-content-center align-items-center rounded-3 shadow'>
                            <h2
                                className='text-black  mx-auto w-100 text-center  mt-5 px-5 py-3 fw-bold text-light shadow-sm '
                                style={{ background: '#2acfcf' }}
                            >
                                Aun no has agregado ninguna Carrera a Favoritos
                            </h2>
                            <img
                                src='https://res.cloudinary.com/djjgtili7/image/upload/v1652043561/Social_networking-rafiki-removebg-preview_ykhkl1.png'
                                alt=''
                            />

                            <button
                                onClick={() => navigate('/unis')}
                                className=' continuar-btn w-75 mx-auto mb-4'
                            >
                                Ir a Universidades
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className='w-75 m-auto'>
                            Favoritos: {dataf.length}
                        </h2>
                        {dataf?.map((carrera) => (
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
                                            carrera.sigla === 'unal' ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556835/u/unal_txtgip.png' :
                                                carrera.sigla === 'ecci' ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556836/u/ecci_vsmyre.png' :
                                                    carrera.sigla === 'utap' ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556836/u/utap_tonkbm.png' :
                                                        carrera.sigla === 'puj' ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651556839/u/puj_wggjl8.png' :
                                                            carrera.sigla === 'unitec' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Logo_Unitec.png/640px-Logo_Unitec.png' :
                                                                carrera.sigla === 'poli' ? 'https://politecnicointernacional.edu.co/landings/wp-content/uploads/2019/05/fav-icon.png' :
                                                                    'https://thumbs.dreamstime.com/b/sin-foto-ni-icono-de-imagen-en-blanco-cargar-im%C3%A1genes-o-falta-marca-no-disponible-pr%C3%B3xima-se%C3%B1al-silueta-naturaleza-simple-marco-215973362.jpg'
                                        }
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title className='fs-3'>
                                        {carrera.carrera} {/* estrella */}
                                        <span
                                            onClick={() => {
                                                favoriteStar(carrera);
                                            }}
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
                                            <span className='fw-bold fs-6 text-capitalize'>
                                                Sigla:{' '}
                                            </span>
                                            {carrera.sigla}
                                        </p>
                                        <p>
                                            <span className='fw-bold'>Duracion: </span>{' '}
                                            {carrera.duracion} semestres
                                        </p>
                                        <a
                                            href={carrera.url}
                                            className='fw-bold'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            Más información
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Container>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
