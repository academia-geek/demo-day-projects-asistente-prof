import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { infoChaside } from '../../data/chaside';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteUserLogAsync } from '../../redux/actions/actionLogin';
import { deleteUserAsync } from '../../redux/actions/actionUsers';

const Perfil = ({ userV }) => {
  const dispatch = useDispatch();
  const { displayName, email, photoURL } = userV;
  const [result, setResult] = useState();
  const [data, setData] = useState([]);
  console.log(userV.uid);

  useEffect(() => {
    if (userV) {
      setResult(JSON.parse(localStorage.getItem('user')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generatorPDF() {
    const doc = new jsPDF();
    //cuadrado
    doc.setFillColor(75, 63, 107);
    doc.rect(0, 0, 210, 40, 'F');

    //titulo e img

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(252, 252, 252);
    doc.text(`Tu Asistente Prof`, 80, 20);
    doc.addImage(
      'https://res.cloudinary.com/djjgtili7/image/upload/v1651901836/Tu_Asistente_prof_1_tqqqyk.png',
      50,
      0,
      40,
      40
    );

    //text hello
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(
      `Hola ${userV.displayName} estos son los resultados del test CHASIDE:`,
      20,
      60
    );

    //cuadro uno morado
    doc.setFillColor(163, 157, 179);
    doc.rect(20, 80, 170, 100, 'F');

    //cuadro tipo de carrera y texto
    doc.setFillColor(148, 231, 231);
    doc.rect(30, 85, 60, 8, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${data[0].title}`, 35, 90);

    //img cuadro
    doc.addImage(`${data[0].imagen}`, 30, 95, 60, 60);

    //cuadro y text intereses
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Intereses`, 125, 90);
    doc.line(100, 92, 180, 92);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 95, 80, 15, 'F');

    doc.setFontSize(10);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[0].intereses}`, 105, 100, {
      align: 'justify',
      maxWidth: 70,
    });

    //cuadro y text aptitudes
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Aptitudes`, 125, 120);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 125, 80, 15, 'F');

    doc.setFontSize(12);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[0].aptitudes}`, 105, 130, {
      align: 'justify',
      maxWidth: 70,
    });

    //cuadro y carreras
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Carreras`, 125, 150);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 155, 80, 20, 'F');

    doc.setFontSize(12);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[0].carrera}`, 105, 160, {
      align: 'justify',
      maxWidth: 70,
    });

    //cuadro dos morado 2
    doc.setFillColor(163, 157, 179);
    doc.rect(20, 190, 170, 100, 'F');

    //cuadro tipo de carrera y texto
    doc.setFillColor(148, 231, 231);
    doc.rect(30, 195, 60, 8, 'F');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${data[1].title}`, 32, 200, {
      align: 'justify',
      maxWidth: 70,
    });

    //img cuadro 2
    doc.addImage(`${data[1].imagen}`, 30, 205, 60, 60);

    //cuadro y text intereses 2
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Intereses`, 125, 200);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 205, 80, 15, 'F');

    doc.setFontSize(10);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[1].intereses}`, 105, 210, {
      align: 'justify',
      maxWidth: 70,
    });

    //cuadro y text aptitudes 2
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Aptitudes`, 125, 230);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 235, 80, 15, 'F');

    doc.setFontSize(12);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[1].aptitudes}`, 105, 240, {
      align: 'justify',
      maxWidth: 70,
    });

    //cuadro y carreras 2
    doc.setFontSize(18);
    doc.setTextColor(252, 252, 252);
    doc.text(`Carreras`, 125, 260);

    doc.setFillColor(75, 63, 107);
    doc.rect(100, 265, 80, 20, 'F');

    doc.setFontSize(12);
    doc.setTextColor(252, 252, 252);
    doc.text(`${data[1].carrera}`, 105, 272, {
      align: 'justify',
      maxWidth: 70,
    });

    doc.save(`${displayName}-Resultados-Chaside.pdf`);
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

  const deleteuser = () => {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'Tu información se eliminara permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2acfcf ',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUserLogAsync());
        dispatch(deleteUserAsync(userV.uid));
        Swal.fire('Eliminado!', 'Tu usuario ha sido Eliminado', 'success');
        localStorage.clear();
      }
    });
  };

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
            src={
              photoURL
                ? photoURL
                : 'https://res.cloudinary.com/djjgtili7/image/upload/v1650336872/ArtistApp/ICONO-PERFIL_gh23iu.png'
            }
          />
          <Card.Body className='text-center ProfileCardBody '>
            <Card.Text className='TextBold mb-0'>{displayName}</Card.Text>
            <Card.Text className='TextMuted'>{email}</Card.Text>
          </Card.Body>
          <Card.Footer className='CardFooter'>
            <Row xs='2' className='text-center mb-1'>
              <Col className='cursorp ' onClick={generatorPDF}>
                <Card.Text className='TextBold iconHoverPdf'>
                  <i className='bi bi-file-earmark-arrow-down-fill '></i>
                </Card.Text>
                <Card.Text className='TextMuted iconHoverPdf'>
                  Descargar Resultados
                </Card.Text>
              </Col>
              <Col className='cursorp' onClick={() => deleteuser()}>
                <Card.Text className='TextBold iconHoverX'>
                  <i class='bi bi-x-square-fill '></i>
                </Card.Text>
                <Card.Text
                  className='TextMuted iconHoverX'
                  onClick={() => deleteuser()}
                >
                  Eliminar Cuenta
                </Card.Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Perfil;
