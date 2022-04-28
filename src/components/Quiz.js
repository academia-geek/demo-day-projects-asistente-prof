import React from 'react'
import { Container } from 'react-bootstrap';
import '../style/quiz.css'

export const Quiz = () => {

    //traerdata
    const urlQuiz = 'http://localhost:3000/quest'
    // forma 1
    fetch(urlQuiz)
        .then(response => response.json())
        .then(data => console.log(data));
    // forma 2
    // const getDataQuiz= async ()=>{
    //     const resp = await fetch(urlQuiz)
    //     console.log(resp)
    //     const data = await resp.json()8
    //     console.log(data)
    // }
    // getDataQuiz()


    return (
        <div className='py-5' style={{ background: '#4B3F6B' }}>
            <Container className='w-100 d-flex m-auto' style={{ width: '18rem', background: ' white', borderRadius: '20px' }} >
                <div className='w-50 text-center text-light'>
                    <h2 className='fw-bold my-3'>Pregunta?</h2>
                    <li className='ans'>Biologia</li>
                    <li className='ans'>Biologia</li>
                    <li className='ans'>Biologia</li>
                    <li className='ans'>Biologia</li>
                    <button className='btnSiguiente text-light'>Siguiente</button>
                    <p>1 / 5</p>
                </div>
                <div className='w-50 d-flex align-items-center'>
                    <img className='w-100 d-flex m-auto' src="https://i.ibb.co/FXX78jr/8004-20171121041121-removebg-preview.png" alt='logo' />
                </div>
            </Container>
        </div>
    )
}
