import React, { useEffect, useState } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { infoChaside } from '../data/chaside'
import '../style/Testimonios.css'

export const Testimonios = ({ careeries }) => {
    const [testi, setTesti] = useState([])

    useEffect(() => {
        const info = infoChaside?.find(i => i.id === careeries)
        setTesti(info)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Accordion className='w-75 mx-auto acor' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header className='textB'>Testimonio 1</Accordion.Header>
                <Accordion.Body>
                    <div className='contentTestimonios'>
                        <div className="contentImgCut">
                            <Card.Img className='imgCut' src={testi.img1} alt=' girl' />
                            <Card.ImgOverlay className='imgSobre'>
                                <Card.Img className='w-100' src='https://i.ibb.co/MNLw3ZB/Tu-Asistente-prof-1-tqqqyk.png' alt='logo' />

                            </Card.ImgOverlay>
                        </div>
                        <div className='contentInfo'>
                            <p className='fs-5 p-3'>
                                " {testi.description1} "
                            </p>
                            <b className='fs-5 p-3'>{testi.title}</b>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='textB'>Testimonio 2</Accordion.Header>
                <Accordion.Body>
                    <div className='contentTestimonios'>
                        <div className="contentImgCut">
                            <Card.Img className='imgCut' src={testi.img2} alt=' girl' />
                            <Card.ImgOverlay className='imgSobre'>
                                <Card.Img className='w-100' src='https://i.ibb.co/MNLw3ZB/Tu-Asistente-prof-1-tqqqyk.png' alt='logo' />

                            </Card.ImgOverlay>
                        </div>
                        <div className='contentInfo'>
                            <p className='fs-5 p-3'>
                                " {testi.description2} "
                            </p>
                            <b className='fs-5 p-3'>{testi.title}</b>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}
