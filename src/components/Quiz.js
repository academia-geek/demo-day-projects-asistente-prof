import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import '../style/quiz.css'

export const Quiz = () => {

    //traerdata
    const urlQuiz = 'https://asistente-prof.herokuapp.com/questions'
    // forma 1
    // fetch(urlQuiz)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    //btn nmext
    const [conter, setconter] = useState(1)
    const sumar = () =>{
        setconter(conter + 1)
    }
    // forma 2
    const [questions, setQuestions] = useState([])
    const getDataQuiz = async (url) => {
        console.log(' hi')
        const resp = await fetch(url)
        const data = await resp.json()
        setQuestions(data)
    }
    console.log(questions)
    useEffect(() => {
        
    getDataQuiz(urlQuiz)

    }, [])
    


    return (
        <div className='py-5' style={{ background: '#4B3F6B' }}>
            <Container className='w-100 d-flex m-auto' style={{ width: '18rem', background: ' white', borderRadius: '20px' }} >
                <div className='w-50 text-center text-light'>
                    {/* <h2 className='fw-bold m-3'>{questions[0].quest}</h2> */}
                    <li className='ans'>Yes</li>
                    <li className='ans'>No</li>
                    <button className='btnSiguiente text-light' onClick={()=>sumar()}>Siguiente</button>
                    <p> {conter} / 5</p>
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <img className='w-100 d-flex m-auto' src="https://i.ibb.co/FXX78jr/8004-20171121041121-removebg-preview.png" alt='logo' />
                </div>
            </Container>
        </div>
    )
}
