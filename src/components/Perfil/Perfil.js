import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { infoChaside } from '../../data/chaside';

const Perfil = ({ userV }) => {
  const { displayName, email, photoURL } = userV;
  const [result, setResult] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (userV) {
      setResult(JSON.parse(localStorage.getItem('user')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generatorPDF() {
    const doc = new jsPDF();
    // doc.setFont('helvetica', 'bold');
    // doc.setFontSize(20);
    // doc.text(`Tu Asistente Prof`, 50, 10);
    // doc.addImage("https://res.cloudinary.com/djjgtili7/image/upload/v1651901836/Tu_Asistente_prof_1_tqqqyk.png", 40, 5, 20, 20);
    // doc.setFontSize(16);
    // doc.setFont('helvetica', 'normal');
    // doc.text(`Nombre: ${displayName}`, 10, 20);
    // doc.text(`Correo: ${email}`, 10, 30);
    // data.forEach((element, index) => {
    //   doc.text(`${element.title}`, 10, 40 + index * 10);
    //   doc.text(`${element.intereses}`, 10, 70 + index * 10);
    //   doc.text(`${element.aptitudes}`, 10, 90 + index * 10);
    //cuadrado
    //cuadrado
    doc.setFillColor(75, 63, 107);
    doc.rect(0, 0, 210, 40, 'F');

    //titulo e img
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(252, 252, 252);
    doc.text(`Tu Asistente Prof`, 80, 20);
    doc.addImage("https://res.cloudinary.com/djjgtili7/image/upload/v1651901836/Tu_Asistente_prof_1_tqqqyk.png", 50, 0, 40, 40);

    //text hello
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Hola ${displayName} estos son los resultados del test`, 20, 60);

    //cuadro dos
    doc.setFillColor(163, 157, 179);
    doc.rect(20, 80, 170, 80, 'F');

    //cuadro tipo de carrera
    doc.setFillColor(148, 231, 231);
    doc.rect(45, 85, 30, 8, 'F');

    //img cuadro
    doc.addImage("https://res.cloudinary.com/edwin3002/image/upload/v1651613762/u/s_indnvz.webp", 30, 95, 60, 60);

    //cuadro y text intereses
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Intereses`, 125, 90);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 95, 80, 15, 'F');

    //cuadro y text aptitudes
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Aptitudes`, 125, 120);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 125, 80, 15, 'F');

    //cuadro dos
    doc.setFillColor(163, 157, 179);
    doc.rect(20, 170, 170, 80, 'F');
    doc.save(`${displayName}-Resultados-Chaside.pdf`);
    console.log('PDF');
    console.log(data);
  }

  useEffect(() => {
    if (result) {
      dataPdf();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const dataPdf = async () => {
    if (result) {
      const resultPdf = await result?.answers?.filter((item) =>
        item.ans > 2 ? item.id : null
      );

      const resultSinDuplicate = resultPdf.filter(
        (item, index) => resultPdf.indexOf(item) === index
      );

      infoChaside?.forEach((item) => {
        resultSinDuplicate?.forEach((item2) => {
          if (item.id === item2.id) {
            setData((data) => [...data, item]);
          }
        });
      });
    }
  };
  console.log(data);

  return (
    <div style={{ background: '#4B3F6B' }} className='mt-5 Background'>
      <Container className='py-5'>
        <Card className=' ProfileCard mx-auto'>
          <Card.Img
            className='ProfileCardBackgroundImage '
            alt='Background Image'
            variant='top'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651781957/bg-pattern-card_v7d4jo.svg'
          />
          <Card.Img
            className='ProfileCardImage '
            alt='User Image'
            src={photoURL}
          />
          <Card.Body className='text-center ProfileCardBody '>
            <Card.Text className='TextBold mb-0'>{displayName}</Card.Text>
            <Card.Text className='TextMuted'>{email}</Card.Text>
          </Card.Body>
          <Card.Footer className='CardFooter'>
            <Row xs='2' className='text-center mb-1'>
              <Col>
                <Card.Text className='TextBold'>
                  <i className='bi bi-file-earmark-arrow-down-fill'></i>
                </Card.Text>
                <Card.Text className='TextMuted' onClick={generatorPDF}>
                  Descargar Resultados
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className='TextBold'>1.4K</Card.Text>
                <Card.Text className='TextMuted'>Photos</Card.Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Perfil;
