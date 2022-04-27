import React from 'react'
import { Card, ListGroup, Table } from 'react-bootstrap'
import '../../style/landingPage.css'

const LFooter = () => {
    return (

        <div className='foot2 mt-5 pb-4' style={{ background: '#3B3054' }}>

            <h2 className='text-center'>Asistente prof</h2>
            <img className='d-flex m-auto' style={{width: '5%'}} src='https://i.ibb.co/4fh24Gm/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png' alt='logo'/>
            <Table className='foot2  table-borderless w-75 mx-auto my-4 text-light' responsive="sm" style={{ background: '#3B3054' }}>
                <tbody className='text-light'>
                    <tr>
                        <th>Conócenos</th>
                        <th>Gana dinero con nosotros</th>
                        <th>Podemos ayudarte</th>
                        <th>Redes Sociales</th>
                    </tr>
                    <tr>
                        <td>Trabajar en Amazon</td>
                        <td>Vender en Amazon Handmade</td>
                        <td>Departamento de prensa</td>
                        <td className='d-flex justify-content-between '>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter "></i>
                            <i class="bi bi-instagram"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Información corporativa</td>
                        <td>Publica tu libro en Kindle</td>
                        <td>Devolver o reemplazar productos</td>
                    </tr>
                    <tr>
                        <td>Departamento de prensa</td>
                        <td>Programa de afiliados</td>
                        <td>Gestionar contenido y dispositivos</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default LFooter