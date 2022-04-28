import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../style/quiz.css';

export const Quiz = () => {
  const urlQuiz = 'https://asistente-prof.herokuapp.com/questions';

  const [conter, setconter] = useState(0);
  const [questions, setQuestions] = useState([]);

  const getDataQuiz = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setQuestions(data);
  };
  console.log(questions);
  useEffect(() => {
    getDataQuiz(urlQuiz);
  }, []);

  console.log(questions);

  const sumar = () => {
    setconter(conter + 1);
    console.log(conter);
  };

  return (
    <div className='py-5' style={{ background: '#4B3F6B' }}>
      <Container
        className='w-100 d-flex m-auto'
        style={{ width: '18rem', background: ' white', borderRadius: '20px' }}
      >
        <div className='w-50 text-center text-light'>
          <h2 className='fw-bold m-3'>{questions[conter]?.quest}</h2>
          <li className='ans'>Yes</li>
          <li className='ans'>No</li>
          <button className='btnSiguiente text-light' onClick={() => sumar()}>
            Siguiente
          </button>
          <p>
            {conter + 1} / {questions.length}
          </p>
        </div>
        <div className='w-50 d-flex align-items-center'>
          <img
            className='w-100 d-flex m-auto'
            src='https://i.ibb.co/FXX78jr/8004-20171121041121-removebg-preview.png'
            alt='logo'
          />
        </div>
      </Container>
    </div>
  );
};
