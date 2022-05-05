import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { updateCareerAsync } from '../redux/actions/actionUniversity';

export const Edit = ({ mEdit, setModalEdit }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    setModalEdit(false);
  };

  const [values, handleInputChange, reset] = useForm({
    universidad: mEdit.universidad,
    sigla: mEdit.sigla,
    titulo: mEdit.titulo,
    descripcion: mEdit.descripcion,
    carrera: mEdit.carrera,
    duracion: mEdit.duracion,
    url: mEdit.url,
    ciudad: mEdit.ciudad,
    area: mEdit.area,
    idCarrera: mEdit.idCarrera,
  });
  const { universidad, titulo, descripcion, carrera, duracion, ciudad, idCarrera, url, sigla } =
    values;

  const handleSubmit = () => {
    console.log(values);
    dispatch(updateCareerAsync(idCarrera, values));
    setModalEdit(false);
    reset()
  };
  return (
    <div>
      <div>edit</div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edite la carrera aqui</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} className='w-75 mx-auto my-2'>
          <Form.Label className='fw-bold'>Universidad</Form.Label>
          <Form.Select
            name='universidad'
            onChange={handleInputChange}
            value={universidad}
          >
            <option>Selecciona universidad</option>
            <option>Universidad Nacional de Colombia</option>
            <option>Pontificia Universidad Javeriana</option>
            <option>Universidad Icesi</option>
          </Form.Select>
          <Form.Label className='fw-bold' htmlFor='car'>Sigla de universidad</Form.Label>
          <Form.Control
            type='text'
            id='car'
            name='sigla'
            placeholder='Sigla de universidad'
            value={sigla}
            onChange={handleInputChange}
          />
          <Form.Label className='fw-bold' htmlFor='ciu'>Ciudad</Form.Label>
          <Form.Select name='ciudad' onChange={handleInputChange} value={ciudad}>
            <option>Selecciona Ciudad</option>
            <option>Bogota</option>
            <option>Medellin</option>
            <option>Cali</option>
            <option>Cartagena</option>
          </Form.Select>
          <Form.Label className='fw-bold' htmlFor='tit'>Titulo de formacion</Form.Label>
          <Form.Select name='titulo' onChange={handleInputChange} value={titulo}>
            <option>Titulo</option>
            <option>Profesional</option>
            <option>Tecnico</option>
            <option>Tecnologo</option>
          </Form.Select>
          <Form.Label className='fw-bold' htmlFor='tit'>Area de la carrera</Form.Label>
          <Form.Select name='area' onChange={handleInputChange}>
            <option>Area</option>
            <option value={'c'}>Administrativas y Contables</option>
            <option value={'h'}>Humanísticas y Sociales</option>
            <option value={'a'}>Artísticas</option>
            <option value={'s'}>Medicina y Cs. de la Salud </option>
            <option value={'i'}>Ingeniería y Computación </option>
            <option value={'d'}>Defensa y Seguridad </option>
            <option value={'e'}>Ciencias Exactas y Agrarias</option>
          </Form.Select>

          <Form.Label className='fw-bold' htmlFor='car'>Carrera</Form.Label>

          <Form.Control
            type='text'
            id='car'
            name='carrera'
            placeholder='Carrera'
            value={carrera}
            onChange={handleInputChange}
          />
          <Form.Label className='fw-bold' htmlFor='car'>Url de la Carrera</Form.Label>
          <Form.Control
            type='text'
            id='car'
            name='url'
            placeholder='url'
            value={url}
            onChange={handleInputChange}
          />
          <Form.Label className='fw-bold' htmlFor='dur'>Duracion</Form.Label>
          <Form.Select
            name='duracion'
            onChange={handleInputChange}
            value={duracion}
          >
            <option defaultValue>Selecciona Duracion(Semestres)</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Form.Select>
          <Form.Label className='fw-bold' htmlFor='desc'>Descripcion</Form.Label>
          <Form.Control
            as='textarea'
            id='desc'
            name='descripcion'
            placeholder='Descripcion'
            value={descripcion}
            onChange={handleInputChange}
          />

          <Button type='submit' variant='success' className='m-4'>
            Editar
          </Button>
        </Form>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
