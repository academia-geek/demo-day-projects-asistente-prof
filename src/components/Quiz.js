import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { quest } from '../data/q';
import '../style/quiz.css';
import Result from './ResultQuiz/Result';

export const Quiz = () => {
  const [conter, setconter] = useState(85);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [letters, setLetters] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [focus, setFocus] = useState([]);

  console.log(letters[0]);
  console.log(answers);

  const getDataQuiz = (url) => {
    setQuestions(url);
  };

  useEffect(() => {
    getDataQuiz(quest);
    const AnswersLS = JSON.parse(localStorage.getItem('answers'));
    const conterLS = JSON.parse(localStorage.getItem('conter'));
    const lettersLS = JSON.parse(localStorage.getItem('letters'));
    if (AnswersLS) {
      setAnswers(AnswersLS);
    }
    if (conterLS) {
      setconter(conterLS);
    }
    if (lettersLS) {
      setLetters(lettersLS);
    }
  }, []);

  useEffect(() => {
    setAnswers([
      {
        id: 'c',
        ans: letters[0],
      },
      {
        id: 'h',
        ans: letters[1],
      },
      {
        id: 'a',
        ans: letters[2],
      },
      {
        id: 's',
        ans: letters[3],
      },
      {
        id: 'i',
        ans: letters[4],
      },
      {
        id: 'd',
        ans: letters[5],
      },
      {
        id: 'e',
        ans: letters[6],
      },
    ]);
  }, [letters]);

  useEffect(() => {
    const prueba = answers?.filter((item) => (item.ans > 2 ? item.id : null));
    setFocus(prueba);
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('conter', JSON.stringify(conter));
    localStorage.setItem('letters', JSON.stringify(letters));
  }, [answers, conter, letters]);

  const sumar = () => {
    setconter(conter + 1);
  };

  const addData = (dat) => {
    console.log(dat);
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
    setconter(conter + 1);
  };

  return (
    <div className='py-5' style={{ background: '#4B3F6B' }}>
      {conter === questions.length ? (
        <Result focus={focus} />
      ) : (
        <Container
          className='w-100 d-flex m-auto'
          style={{ width: '18rem', background: ' white', borderRadius: '20px' }}
        >
          <div className='w-50 text-center text-light d-flex align-content-between flex-wrap'>
            <h2 className='fw-bold m-3'>{questions[conter]?.quest}</h2>
            <ul className='w-100'>
              <li
                className='ans'
                onClick={() => {
                  addData(questions[conter]?.formacion);
                }}
              >
                Yes
              </li>
              <li className='ans' onClick={sumar}>
                No
              </li>
              <p>
                {conter + 1} / {questions.length}
              </p>
            </ul>
          </div>
          <div className='w-50 d-flex align-items-center'>
            <img
              className='w-100 d-flex m-auto'
              src={questions[conter]?.imagen}
              alt='logo'
            />
          </div>
        </Container>
      )}
    </div>
  );
};
