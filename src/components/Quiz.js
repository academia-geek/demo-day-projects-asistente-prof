import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { quest } from '../data/q';
import { paintUserAsync } from '../redux/actions/actionUsers';
import '../style/quiz.css';
import Result from './ResultQuiz/Result';

export const Quiz = ({ userV, setnumero }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [conter, setconter] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [letters, setLetters] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [focus, setFocus] = useState([]);

  const { uid, displayName } = userV;

  const getDataQuiz = (url) => {
    setQuestions(url);
  };

  useEffect(() => {
    if (
      user !== undefined &&
      user.answers !== undefined &&
      user.conter !== undefined &&
      user.letters !== undefined
    ) {
      localStorage.setItem('user', JSON.stringify(user));
      setAnswers(user.answers);
      setconter(user.conter);
      setLetters(user.letters);
    } else {
      setAnswers([]);
      setconter(0);
      setLetters([0, 0, 0, 0, 0, 0, 0]);
    }
  }, [user]);

  useEffect(() => {
    dispatch(paintUserAsync(uid));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (letters !== undefined) {
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
    }
  }, [letters]);

  useEffect(() => {
    const prueba = answers?.filter((item) => (item.ans >= 9 ? item.id : null));
    setFocus(prueba);
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('conter', JSON.stringify(conter));
    localStorage.setItem('letters', JSON.stringify(letters));
    setnumero(conter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, conter, letters]);

  const sumar = () => {
    setconter(conter + 1);
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
    setconter(conter + 1);
  };

  return (
    <div className='py-5 my-3 contPadre'>
      {conter === questions.length ? (
        <Result
          focus={focus}
          setconter={setconter}
          setLetters={setLetters}
          conter={conter}
          answers={answers}
          letters={letters}
          uid={uid}
          displayName={displayName}
        />
      ) : (
        <Container className=' d-flex m-auto marginQuiz shadow my-5'>
          <div className='questionsQuiz my-5 text-center text-light d-flex align-content-between flex-wrap'>
            <h2 className='fw-bold m-3 preguntas'>
              {questions[conter]?.quest}
            </h2>
            <ul className='w-100'>
              <li
                className='btnSioNo'
                onClick={() => {
                  addData(questions[conter]?.formacion);
                }}
              >
                Si
              </li>
              <li className='btnSioNo' onClick={sumar}>
                No
              </li>

              <p>
                {conter + 1} / {questions.length}
              </p>
            </ul>
          </div>
          <div className='d-flex align-items-center imgQuiz'>
            <img
              className='d-flex m-auto  imgQ'
              src={questions[conter]?.imagen}
              alt='logo'
            />
          </div>
        </Container>
      )}
    </div>
  );
};
