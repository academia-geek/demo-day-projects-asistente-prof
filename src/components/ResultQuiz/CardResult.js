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
    <div className='w-100 d-flex shadow rounded mx-auto  p-0 cardResultdos'>
      {infoChaside.map((ite) =>
        ite.id === item ? (
          <div className='w-100 rounded cardResult ' key={ite.id}>
            <div
              className=' my-auto mx-2 py-2 px-4'
              style={{
                maxWidth: '400px',
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

            <Card.Body className='w-50 d-flex  mx-2 p-0'>
              <div className='m-auto'>
                <Card.Title className='fs-3 fw-bold text-center'>
                  {ite.title}
                </Card.Title>
                <hr />
                <Card.Title className='text-center fs-2'>Intereses </Card.Title>
                <p
                  id={ite.id}
                  className='fw-bold p-3 text-center border border-dark rounded'
                >
                  {ite.intereses}
                </p>
                <Card.Title className='text-center fs-2'>Aptitudes</Card.Title>
                <Card.Text
                  id={ite.id}
                  className=' fw-bold p-3 text-center border border-dark rounded'
                >
                  {ite.aptitudes}
                </Card.Text>
                <Card.Title className='text-center fs-2'>Carreras</Card.Title>
                <Card.Text
                  id={ite.id}
                  className=' fw-bold p-3 text-center border border-dark rounded'
                >
                  {ite.carrera}
                </Card.Text>
                <Button
                  variant='info'
                  className='m-auto d-flex'
                  onClick={() => {
                    handleUniversity();
                  }}
                  style={{ background: '#6ee6e6' }}
                >
                  Ver Universidades
                </Button>
              </div>
            </Card.Body>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CardResult;
