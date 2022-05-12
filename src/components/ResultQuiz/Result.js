import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveFavorites } from '../../helpers/favoriteLocalStorage';
import { resetLS } from '../../helpers/resetLS';
import { paintCareerAsync } from '../../redux/actions/actionUniversity';
import { addUserAsync, deleteUserAsync } from '../../redux/actions/actionUsers';
import TitleResult from '../TitleResult';
import CardResult from './CardResult';

const Result = ({
  focus,
  setconter,
  setLetters,
  conter,
  answers,
  letters,
  uid,
  displayName,
  setBtnPerfil,
}) => {
  const navigate = useNavigate();
  const [resultMatch, setResultMatch] = useState(false);
  const [newUser] = useState({
    id: uid,
    name: displayName,
    answers,
    conter,
    letters,
  });
  const [resetarTest, setResetarTest] = useState(false);

  const dispatch = useDispatch();
  const { careeries } = useSelector((store) => store.careeries);

  useEffect(() => {
    dispatch(paintCareerAsync());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    resetLS(resetarTest, setResetarTest);
  }, [resetarTest]);

  const handleReset = () => {
    dispatch(deleteUserAsync(uid));
    setResetarTest(true);
    setTimeout(() => {
      setconter(0);
    }, 2000);
  };

  const agregarBDUSer = () => {
    dispatch(addUserAsync(newUser));
    navigate('/perfil');
    setBtnPerfil(true);
    localStorage.setItem('f', JSON.stringify(focus));
  };
  const favoriteStar = (car) => {
    saveFavorites(car);
  };

  return (
    <div>
      <Container className='w-100'>
        {resultMatch ? (
          <div>
            <h1
              className=' fs-3 cursorp'
              style={{ position: 'fixed', marginTop: '80px' }}
              onClick={() => setResultMatch(false)}
            >
              <span className=' bi bi-arrow-left-circle-fill text-info cursorp'></span>{' '}
              Volver
            </h1>
            <div
              className=' d-flex justify-content-between flex-wrap'
              style={{ width: '100%' }}
            >
              <TitleResult careeries={careeries} />
              {careeries.map((carrera) => (
                <Container
                  className='d-flex my-3 shadow bg-light rounded'
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
                        style={{ color: 'gray', float: 'right' }}
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
                      <p>
                        <span className='fw-bold'>Duracion: </span>{' '}
                        {carrera.duracion} semestres
                      </p>
                      <a
                        href='https://www.unbosque.edu.co/'
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
        ) : (
          <div className='centrar'>
            <h2 className='mt-5 pt-5 fs-1'>
              Hola, <span className='fw-bold'>{displayName}</span> estos son tus
              resultados:
            </h2>
            <div className='botones mt-5'>
              <button
                className='guardar-btn '
                onClick={() => {
                  agregarBDUSer();
                }}
              >
                Guardar Test
              </button>
              <button
                className={resetarTest ? 'visually-hidden' : 'reiniciar-btn '}
                onClick={() => {
                  handleReset();
                  Swal.fire({
                    title: `Acabas de reiniciar tu test, ya no te quedan opciónes de reiniciarlo`,
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp',
                    },
                  });
                }}
              >
                Reiniciar Test
              </button>
            </div>
            <div className='conten '>
              <CardResult item={focus[0] ? focus[0].id : null} setResultMatch={setResultMatch} />
              <CardResult item={focus[1] ? focus[1].id : null} setResultMatch={setResultMatch} />
            </div>
            <br />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Result;
