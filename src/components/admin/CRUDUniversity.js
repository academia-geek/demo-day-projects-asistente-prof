import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  ListGroup,
  ListGroupItem,
  Modal,
  Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { useForm } from '../../Hooks/useForm';
import {
  addCareerAsync,
  deleteCareerAsync,
  paintCareerAsync,
} from '../../redux/actions/actionUniversity';
import '../../style/crud.css';
import { Edit } from '../Edit';

const CRUDUniversity = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    universidad: '',
    titulo: '',
    descripcion: '',
    carrera: '',
    duracion: '',
    ciudad: '',
    area: '',
    sigla: '',
    url: '',
    idCarrera: uuid(),
  });
  const {
    universidad,
    titulo,
    descripcion,
    carrera,
    duracion,
    ciudad,
    sigla,
    url,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCareerAsync(values));
    reset();
  };

  // action delete
  const [objModal, setAObjModal] = useState([]);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const eliminar = (p) => {
    handleShow2();
    setAObjModal(p);
  };

  const eliminarYes = () => {
    dispatch(deleteCareerAsync(objModal.idCarrera));
    setTimeout(() => {
      handleClose2();
    }, 1000);
  };

  //edit
  const [modalEdit, setModalEdit] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const editarM = (p) => {
    setDataModal(p);
    setModalEdit(true);
  };

  const { careeries } = useSelector((store) => store.careeries);

  useEffect(() => {
    dispatch(paintCareerAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div >
      <div>
        <Link to='/landing'>
          <Button variant='secondary' className='m-2 back-btn'>
            {' '}
            <span className='bi bi-arrow-left-circle-fill text-light'></span>{' '}
            Volver a pagina principal
          </Button>
        </Link>
      </div>
      <h1 className='text-center fw-bold'>Agregar Formación Academica</h1>
      <Form
        onSubmit={handleSubmit}
        className='w-75 mx-auto my-5 py-5 sombraSha'
        
      >
        <Form.Label className='w-75 d-flex mx-auto fw-bold '>
          Universidad
        </Form.Label>
        <Form.Select
          name='universidad'
          onChange={handleInputChange}
          value={universidad}
          className='w-75 mx-auto mb-3 text-secondary'
        >
          <option>Selecciona Universidad</option>
          <option>Universidad Nacional de Colombia</option>
          <option>Pontificia Universidad Javeriana</option>
          <option>Universidad Icesi</option>
          <option>Corporación Universitaria UNITEC</option>
          <option>Politecnico Gran Colombiano</option>
        </Form.Select>
        <Form.Label htmlFor='car' className='w-75 d-flex mx-auto fw-bold'>
          Sigla de universidad
        </Form.Label>
        <Form.Control
          type='text'
          id='car'
          name='sigla'
          placeholder='Sigla de universidad'
          value={sigla}
          onChange={handleInputChange}
          className='w-75 mx-auto text-secondary mb-3'
        />
        <Form.Label htmlFor='ciu' className='w-75 d-flex mx-auto fw-bold'>
          Ciudad
        </Form.Label>
        <Form.Select
          name='ciudad'
          onChange={handleInputChange}
          value={ciudad}
          className='w-75 mx-auto text-secondary mb-3'
        >
          <option>Selecciona Ciudad</option>
          <option>Bogota</option>
          <option>Medellin</option>
          <option>Cali</option>
          <option>Cartagena</option>
        </Form.Select>
        <Form.Label htmlFor='tit' className='w-75 d-flex mx-auto fw-bold'>
          Titulo de formación
        </Form.Label>
        <Form.Select
          name='titulo'
          onChange={handleInputChange}
          value={titulo}
          className='w-75 mx-auto text-secondary mb-3'
        >
          <option>Titulo</option>
          <option>Profesional</option>
          <option>Tecnico</option>
          <option>Tecnologo</option>
        </Form.Select>
        <Form.Label htmlFor='tit' className='w-75 d-flex mx-auto fw-bold'>
          Area de la carrera
        </Form.Label>
        <Form.Select
          name='area'
          className='w-75 mx-auto text-secondary mb-3'
          onChange={handleInputChange}
        >
          <option>Area</option>
          <option value={'c'}>Administrativas y Contables</option>
          <option value={'h'}>Humanísticas y Sociales</option>
          <option value={'a'}>Artísticas</option>
          <option value={'s'}>Medicina y Cs. de la Salud </option>
          <option value={'i'}>Ingeniería y Computación </option>
          <option value={'d'}>Defensa y Seguridad </option>
          <option value={'e'}>Ciencias Exactas y Agrarias</option>
        </Form.Select>

        <Form.Label htmlFor='car' className='w-75 d-flex mx-auto fw-bold'>
          Carrera
        </Form.Label>
        <Form.Control
          type='text'
          id='car'
          name='carrera'
          placeholder='Carrera'
          value={carrera}
          onChange={handleInputChange}
          className='w-75 mx-auto text-secondary mb-3'
        />
        <Form.Label htmlFor='car' className='w-75 d-flex mx-auto fw-bold'>
          Url de la Carrera
        </Form.Label>
        <Form.Control
          type='text'
          id='car'
          name='url'
          placeholder='url'
          value={url}
          onChange={handleInputChange}
          className='w-75 mx-auto text-secondary mb-3'
        />
        <Form.Label htmlFor='dur' className='w-75 d-flex mx-auto fw-bold '>
          Duración
        </Form.Label>

        <Form.Select
          name='duracion'
          onChange={handleInputChange}
          value={duracion}
          className='w-75 mx-auto text-secondary mb-3'
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
        <Form.Label htmlFor='desc' className='w-75 d-flex mx-auto  fw-bold'>
          Descripcion
        </Form.Label>
        <Form.Control
          as='textarea'
          id='desc'
          name='descripcion'
          placeholder='Descripcion'
          value={descripcion}
          onChange={handleInputChange}
          className='w-75 mx-auto text-secondary mb-3'
        />

        <button
          type='submit'
          variant='success'
          className='m-4 w-25 d-flex mx-auto border-0 add-btn d-flex justify-content-center'
        >
          Agregar
        </button>
        <button
          variant='primary'
          className=' w-25  d-flex mx-auto border-0 view-btn d-flex justify-content-center'
          onClick={() => {
            dispatch(paintCareerAsync());
          }}
        >
          ver todas de carreras
        </button>
      </Form>
      <br />
      <Table
        className='w-75 mx-auto my-4 shadow-lg '
        striped
        bordered
        hover
        size='sm'
      >
        <thead>
          <tr className='text-center'>
            <th>Carrera</th>
            <th>Universidad</th>
            <th>Titulo de formacion</th>
            <th>Área</th>
            <th>Ciudad</th>
            <th>Duracion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {careeries.map((carr, index) => (
            <tr key={index}>
              <td className='position-relative '>
                <div className='position-absolute top-50 start-50 translate-middle'>
                  {carr.carrera}
                </div>
              </td>
              <td className='position-relative'>
                <div className='position-absolute top-50 start-50 translate-middle'>
                  {carr.universidad}
                </div>
              </td>
              <td className='position-relative'>
                <div className='position-absolute top-50 start-50 translate-middle'>
                  {carr.titulo}
                </div>
              </td>
              <td className='position-relative' id={carr.area + '1'}>
                <div className='position-absolute top-50 start-50 translate-middle text-light fw-bold text-uppercase'>
                  {carr.area}
                </div>
              </td>
              <td className='position-relative'>
                <div className='position-absolute top-50 start-50 translate-middle'>
                  {carr.ciudad}
                </div>
              </td>
              <td className='position-relative '>
                <div className='position-absolute top-50 start-50 translate-middle'>
                  {carr.duracion}
                </div>
              </td>
              <td className='position-relative w-2'>
                <div className='imgCrud d-flex align-items-center justify-content-evenly'>
                  <div
                    onClick={() => {
                      editarM(carr);
                    }}
                    className='bi bi-pencil-square text-warning'
                  ></div>
                  <div
                    onClick={() => {
                      eliminar(carr);
                    }}
                    className='bi bi-trash3 text-danger'
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Desea eliminar esta carrera?</Modal.Title>
          </Modal.Header>
          <Modal.Body className=''>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>
                <span className='fw-bold '>Universidad: </span>
                {objModal.universidad}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold text-capitalize'>
                  Sigla universidad:{' '}
                </span>
                {objModal.sigla}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Ciudad: </span>
                {objModal.ciudad}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Titulo: </span>
                {objModal.titulo}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Carrera: </span>
                {objModal.carrera}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Area: </span>
                {objModal.area}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Duracion: </span>
                {objModal.duracion}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Url: </span>
                {objModal.url}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Descripcion: </span>
                {objModal.descripcion}
              </ListGroupItem>
              <ListGroupItem>
                <span className='fw-bold'>Id: </span>
                {objModal.idCarrera}
              </ListGroupItem>
            </ListGroup>
          </Modal.Body>
          {/* <Card.Img className='w-50 m-auto' variant="top" src={objModal.img} /> */}
          <Modal.Footer>
            <Button variant='danger' onClick={eliminarYes}>
              Si
            </Button>
            <Button variant='primary' onClick={handleClose2}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>
      {modalEdit && <Edit mEdit={dataModal} setModalEdit={setModalEdit} />}
    </div>
  );
};

export default CRUDUniversity;
