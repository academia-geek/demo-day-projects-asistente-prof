import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { addProductAsync } from '../../redux/actions/actionUniversity';

const CRUDUniversity = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    universidad: '',
    titulo: '',
    descripcion: '',
    carrera: '',
    duracion: '',
  });
  const { universidad, titulo, descripcion, carrera, duracion } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addProductAsync(values));
    reset();
  };

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
          <option>Universidad Nacional</option>
          <option>Universidad Distrital</option>
          <option>Universidad Javeriana</option>
        </Form.Select>
        <Form.Label htmlFor='tit'>Titulo</Form.Label>
        <Form.Control
          type='text'
          id='tit'
          name='titulo'
          placeholder='Titulo'
          value={titulo}
          onChange={handleInputChange}
        />
        <Form.Label htmlFor='desc'>Descripcion</Form.Label>
        <Form.Control
          type='textarea'
          id='desc'
          name='descripcion'
          placeholder='Descripcion'
          value={descripcion}
          onChange={handleInputChange}
        />
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
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
};

export default CRUDUniversity;
