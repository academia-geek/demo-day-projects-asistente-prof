import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { infoChaside } from '../../data/chaside';
import {
  filterCareersync,
  paintCareerAsync,
} from '../../redux/actions/actionUniversity';
import '../../style/unis.css';
import { Testimonios } from '../Testimonios';

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
    <div className='w-100 d-flex shadow-lg  rounded mx-auto my-5  p-0 cardResultdos'>
      {infoChaside.map((ite) =>
        ite.id === item ? (
          <div className='w-100 bg-light rounded'>
          <div className='w-100  cardResult' key={ite.id}>
            <div
              className=' my-4 mx-4 py-2 px-4'
              style={{
                maxWidth: '600px',
                border: '5px solid #2b939f',
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
                
            <Card.Body className=' d-flex mx-2 my-4 p-0 cardImg' >
              <div className=' m-auto w-75'>
                <Card.Title className='fs-2 fw-bold text-center'>
                  {ite.title}
                </Card.Title>
                <hr />
                <div className='subT'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Card.Title className='my-4 text-center fs-3'>
                      Intereses
                    </Card.Title>
                    <span className='flecha bi bi-caret-down-square'></span>
                  </div>
                  <p
                    id={ite.id}
                    className='inf fw-bold p-3 text-center border border-dark rounded'
                  >
                    {ite.intereses}
                  </p>
                </div>
                <div className='subT'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Card.Title className='my-4 text-center fs-3'>
                      Aptitudes
                    </Card.Title>
                    <span className='flecha bi bi-caret-down-square'></span>
                  </div>
                  <p
                    id={ite.id}
                    className='inf fw-bold p-3 text-center border border-dark rounded'
                  >
                    {ite.aptitudes}
                  </p>
                </div>
                <div className='subT'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Card.Title className='my-4 fs-3 '>Carreras </Card.Title>
                    <span className='flecha bi bi-caret-down-square'></span>
                  </div>
                  <p
                    id={ite.id}
                    className='inf fw-bold p-3 text-center border border-dark rounded '
                  >
                    {ite.carrera}
                  </p>
                </div>
                <button
                  className='d-flex   watchU-btn fw-bold    '
                  onClick={() => {
                    handleUniversity();
                  }}
                  style={{ background: '#2b939f' }}
                >
                  Ver Carreras
                </button>
              </div>
              
            </Card.Body>

          </div>
          <Testimonios  careeries={ite.id}/>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CardResult;
