import { sendForm } from '@emailjs/browser';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LHeader from './landing/LHeader';

const ContacUs = () => {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    sendForm(
      'service_mj7j2zg',
      'template_u4vmv0l',
      e.target,
      'hv33lgNWeuUWf3uq8'
    )
      .then((result) => {
        if (result.text === 'OK') {
          Swal.fire({
            title: 'Mensaje enviado',
            text: 'Gracias por contactarnos',
            icon: 'success',
          });
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.text) {
          Swal.fire({
            title: 'Error',
            text: error.text,
            icon: 'error',
          });
        }
      });
  };

  return (
    <>
      <LHeader />
      <div className='formtotal'>
        <div className='w-50'>
          <img
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1652059786/Emails-bro-removebg-preview_fhzezd.png'
            alt=''
          />
        </div>
        <Form onSubmit={sendEmail} className='w-50'>
          <h3>Contactanos</h3>

          <Form.Group>
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              name='user_name'
              type='text'
              className='form-control'
              placeholder='Ingrese Nombres'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control
              name='user_email'
              type='email'
              className='form-control'
              placeholder='Ingrese Correo'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mensaje</Form.Label>
            <Form.Control name='user_message' as='textarea' rows={3} />
          </Form.Group>

          <button type='submit' className='continuar-btn mt-3 '>
            Enviar
          </button>
        </Form>
      </div>
    </>
  );
};

export default ContacUs;
