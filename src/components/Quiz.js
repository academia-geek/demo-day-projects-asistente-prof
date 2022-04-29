import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../style/quiz.css';

export const Quiz = () => {
  const urlQuiz = 'https://asistente-prof.herokuapp.com/questions';

  const [conter, setconter] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [letters, setLetters] = useState([0, 0, 0, 0, 0, 0, 0]);

  console.log(letters);

  const getDataQuiz = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setQuestions(data);
  };

  useEffect(() => {
    getDataQuiz(urlQuiz);
  }, []);

  console.log(questions);

  const sumar = () => {
    setconter(conter + 1);
    console.log(conter);
  };

  const addData = (dat) => {
    if (dat === 'c') {
      setLetters(letters.map((item, index) => (index === 0 ? item + 1 : item)));
    } else if (dat === 'h') {
      setLetters(letters.map((item, index) => (index === 1 ? item + 1 : item)));
    } else if (dat === 'a') {
      setLetters(letters.map((item, index) => (index === 2 ? item + 1 : item)));
    } else if (dat === 's') {
      setLetters(letters.map((item, index) => (index === 3 ? item + 1 : item)));
    } else if (dat === 'i') {
      setLetters(letters.map((item, index) => (index === 4 ? item + 1 : item)));
    } else if (dat === 'd') {
      setLetters(letters.map((item, index) => (index === 5 ? item + 1 : item)));
    } else if (dat === 'e') {
      setLetters(letters.map((item, index) => (index === 6 ? item + 1 : item)));
    }
  };

  return (
    <div className='py-5' style={{ background: '#4B3F6B' }}>
      <Container
        className='w-100 d-flex m-auto'
        style={{ width: '18rem', background: ' white', borderRadius: '20px' }}
      >
        <div className='w-50 text-center text-light'>
          <h2 className='fw-bold m-3'>{questions[conter]?.quest}</h2>
          <li
            className='ans'
            onClick={() => {
              addData('d');
            }}
          >
            Yes
          </li>
          <li className='ans'>No</li>
          <button
            className='btnSiguiente text-light'
            onClick={() => {
              sumar();
            }}
          >
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
