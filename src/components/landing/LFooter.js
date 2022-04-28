import React from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../style/landingPage.css'

export const LFooter = () => {
    return (

        <div className='foot2 ' style={{ background: '#3B3054' }}>

            <h2 className='text-center text-light'>Asistente prof</h2>
            <img className='d-flex m-auto' style={{width: '5%'}} src='https://i.ibb.co/4fh24Gm/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png' alt='logo'/>
            <Table className='foot2  table-borderless w-75 mx-auto mb-5 text-light' responsive="sm" style={{ background: '#3B3054' }}>
                <tbody className='text-light tableTd flex-wrap'>
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
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter "></i>
                            <i className="bi bi-instagram"></i>
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
            <hr />
            <ListGroup horizontal className='d-flex justify-content-evenly '>
                <ListGroup.Item className='bg-transparent d-flex'>
                    <img className='d-flex margin-auto'
                        src="https://i.ibb.co/MSyvvTJ/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png"
                        width="10%" alt="" />
                </ListGroup.Item>
                <Link to='/crud' className='crud d-flex align-items-center'>
                    <ListGroup.Item className='bg-transparent border-warning border-1 rounded text-light '>
                        <div className=" bi bi-cloud-plus"> Crud  </div>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    )
}

