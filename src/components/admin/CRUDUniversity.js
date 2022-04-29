import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useForm } from '../../Hooks/useForm';
import { addProductAsync, paintCareerAsync } from '../../redux/actions/actionUniversity';

const CRUDUniversity = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    universidad: '',
    titulo: '',
    descripcion: '',
    carrera: '',
    duracion: '',
    ciudad: '',
    idCarrera: uuid(),
  });
  const { universidad, titulo, descripcion, carrera, duracion, ciudad } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addProductAsync(values));
    reset();
  };

    const { careeries } = useSelector(store => store.careeries)
    const [all, setAll] = useState(careeries)

    useEffect(() => {
        dispatch(paintCareerAsync())
        setAll(careeries)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      <h1>Agregar Formación Academica</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Universidad</Form.Label>
        <Form.Select
          name='universidad'
          onChange={handleInputChange}
          value={universidad}
        >
          <option selected>Selecciona universidad</option>
          <option>Universidad Nacional de Colombia</option>
          <option>Pontificia Universidad Javeriana</option>
          <option>Universidad Javeriana</option>
        </Form.Select>
        <Form.Label htmlFor='ciu'>Ciudad</Form.Label>
        <Form.Select name='ciudad' onChange={handleInputChange} value={ciudad}>
          <option defaultValue>Selecciona Ciudad</option>
          <option>Bogota</option>
          <option>Medellin</option>
          <option>Cali</option>
          <option>Cartagena</option>
        </Form.Select>
        <Form.Label htmlFor='tit'>Titulo</Form.Label>
        <Form.Select name='titulo' onChange={handleInputChange} value={titulo}>
          <option defaultValue>Titulo</option>
          <option>Profesional</option>
          <option>Tecnico</option>
          <option>Tecnologo</option>
        </Form.Select>

        <Form.Label htmlFor='car'>Carrera</Form.Label>

        <Form.Control
          type='text'
          id='car'
          name='carrera'
          placeholder='Carrera'
          value={carrera}
          onChange={handleInputChange}
        />
        <Form.Label htmlFor='dur'>Duracion</Form.Label>

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
        </Form.Select>
        <Form.Label htmlFor='desc'>Descripcion</Form.Label>
        <Form.Control
          as='textarea'
          id='desc'
          name='descripcion'
          placeholder='Descripcion'
          value={descripcion}
          onChange={handleInputChange}
        />

        <button type='submit'>Agregar</button>
      </Form>
    </div>
  );
};

export default CRUDUniversity;
