import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { infoChaside } from '../../data/chaside';
import {
    filterCareersync,
    paintCareerAsync,
} from '../../redux/actions/actionUniversity';
import '../../style/unis.css';

const CardResult = ({ item, setResultMatch }) => {
    const dispatch = useDispatch();
    const handleUniversity = () => {
        dispatch(filterCareersync(item));
        setResultMatch(true);
    };

    useEffect(() => {
        dispatch(paintCareerAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='rounded m-auto'>
            {infoChaside.map((ite) =>
                ite.id === item ? (
                    // <div className='bg-warning m-auto ' style={{ minWidth: '500px' }}>
                    <div className='p-2 rounded cardResult' key={ite.id}>
                        <div
                            className='m-auto p-2'
                            style={{
                                maxWidth: '300px',
                                border: '5px solid #2ACFCF',
                                borderRadius: '20px',
                            }}
                        >
                            <img
                                className='w-100 rounded'
                                variant='top'
                                alt='q'
                                src={
                                    ite.id === 'c'
                                        ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613763/u/c_rwrkmu.jpg'
                                        : ite.id === 'h'
                                            ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613751/u/h_ce1m2k.jpg'
                                            : ite.id === 'a'
                                                ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613869/u/a_zb7e01.jpg'
                                                : ite.id === 's'
                                                    ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613762/u/s_indnvz.webp'
                                                    : ite.id === 'i'
                                                        ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613827/u/i_lccsi4.jpg'
                                                        : ite.id === 'd'
                                                            ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613853/u/d_g4ibn7.jpg'
                                                            : ite.id === 'e'
                                                                ? 'https://res.cloudinary.com/edwin3002/image/upload/v1651613848/u/e_fety8d.jpg'
                                                                : 'https://thumbs.dreamstime.com/b/sin-foto-ni-icono-de-imagen-en-blanco-cargar-im%C3%A1genes-o-falta-marca-no-disponible-pr%C3%B3xima-se%C3%B1al-silueta-naturaleza-simple-marco-215973362.jpg'
                                }
                            />
                        </div>
                        <Card.Body className='w-50 m-0 p-0'>
                            <Card.Title className='text-center'>Intereses</Card.Title>
                            <p
                                id={ite.id}
                                className='fw-bold text-light text-center border border-dark rounded'>
                                {ite.intereses}
                            </p>
                            <Card.Title className='text-center'>Aptitudes</Card.Title>
                            <Card.Text
                                id={ite.id}
                                className=' fw-bold text-light text-center border border-dark rounded'>
                                {ite.aptitudes}
                            </Card.Text>
                            <Card.Title className='text-center'>Aptitudes</Card.Title>
                            <Card.Text
                                id={ite.id}
                                className=' fw-bold text-light text-center border border-dark rounded'>
                                {ite.aptitudes}
                            </Card.Text>
                            <Button
                                onClick={() => {
                                    handleUniversity();
                                }}
                            >
                                Ver Universidades
                            </Button>
                        </Card.Body>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default CardResult;
