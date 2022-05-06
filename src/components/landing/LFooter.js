import React from 'react'
import { Table } from 'react-bootstrap'
import '../../style/landingPage.css'

export const LFooter = () => {
    return (

        <div className='foot2 pb-5' style={{ background: '#3B3054' }}>

            {/* <h2 className='text-center text-light'>Asistente prof</h2>
            <img className='d-flex m-auto' style={{ width: '5%' }} src='https://i.ibb.co/4fh24Gm/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png' alt='logo' /> */}
            <Table className='foot2  table-borderless w-75 mx-auto m-0 p-5 text-light' responsive="sm" style={{ background: '#3B3054' }}>
                <tbody className='text-light tableTd flex-wrap'>
                    <tr>
                        <th>Asistente</th>
                        <th>Conócenos</th>
                        <th>Podemos ayudarte</th>
                        <th>Redes Sociales</th>
                    </tr>
                    <tr>
                        <td rowSpan='4' className='w-25'>
                            <img className='imgFoot'   src='https://i.ibb.co/4fh24Gm/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png' alt='logo' />
                        </td>
                    </tr>
                    <tr>
                        <td>Trabajar en Amazon</td>
                        <td>Departamento de prensa</td>
                        <td className='d-flex justify-content-between '>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter "></i>
                            <i className="bi bi-instagram"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Información corporativa</td>
                        <td>Devolver o reemplazar productos</td>
                    </tr>
                    <tr>
                        <td>Departamento de prensa</td>
                        <td>Gestionar contenido y dispositivos</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

