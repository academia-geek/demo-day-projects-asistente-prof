import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveFavorites } from '../../helpers/favoriteLocalStorage';
import { paintCareerAsync } from '../../redux/actions/actionUniversity';
import { addUserAsync, deleteUserAsync } from '../../redux/actions/actionUsers';
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
  const [resetarTest, setResetarTest] = useState(2);
  console.log(resetarTest);

  const dispatch = useDispatch();
  const { careeries } = useSelector((store) => store.careeries);

  useEffect(() => {
    dispatch(paintCareerAsync());
    if (localStorage.getItem(`resetarTest`)) {
      const reset = JSON.parse(localStorage.getItem('resetarTest'));
      setResetarTest(reset);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(`resetarTest`, JSON.stringify(resetarTest));
  }, [resetarTest]);

  const handleReset = () => {
    dispatch(deleteUserAsync(uid));
    setTimeout(() => {
      navigate('/home');
    }, 1000);
    setResetarTest(resetarTest - 1);
  };

  const agregarBDUSer = () => {
    dispatch(addUserAsync(newUser));
    navigate('/perfil');
  };
  const favoriteStar = (car) => {
    saveFavorites(car);
  };

  return (
    <div>
      <Container className='w-100'>
        {resultMatch ? (
          <div>
            <h1 className='pt-5' onClick={() => setResultMatch(false)}>
              <span className='bi bi-arrow-left-circle-fill text-info'></span>{' '}
              Volver
            </h1>

            <div
              className=' d-flex justify-content-between flex-wrap'
              style={{ width: '100%' }}
            >
              {careeries.map((carrera) => (
                <Container
                  className='d-flex my-3 shadow'
                  style={{ minWidth: '500px', maxWidth: '700px' }}
                  key={carrera.idCarrera}
                >
                  <div className='m-auto d-flex' style={{ width: '150px' }}>
                    <Card.Img
                      className='border border-3 rounded'
                      style={{ width: '100%' }}
                      variant='top'
                      src='https://i.ibb.co/R46Z3hP/Logo-de-la-Universidad-El-Bosque-svg.png'
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
            {focus.map((item) => (
              <div key={item.id} className='conten '>
                <p className=''>
                  {item.id === 'c' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 'h' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 'a' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 's' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 'i' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 'd' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : item.id === 'e' ? (
                    <CardResult
                      item={item.id}
                      setResultMatch={setResultMatch}
                    />
                  ) : null}
                </p>
              </div>
            ))}
            <br />
          </div>
        )}
      </Container>
      <div className='botones'>
        <button
          className='btones-btn'
          onClick={() => {
            agregarBDUSer();
          }}
        >
          Guardar Test
        </button>
        <button
          className={resetarTest <= 0 ? 'visually-hidden' : 'btones-btn'}
          onClick={() => {
            handleReset();
            Swal.fire({
              title: 'Custom animation with Animate.css',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          }}
          
        >
          Reiniciar Test ({resetarTest})
        </button>
      </div>
    </div>
  );
};

export default Result;
