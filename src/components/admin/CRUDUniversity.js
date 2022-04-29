import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal, Table } from 'react-bootstrap';
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

  // action delete
  const [actionModal, setActionModal] = useState([])
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const eliminar = (p) => {
    handleShow2()
    setActionModal(p)
    console.log(p)
  }

  const eliminarYes = () => {
    console.log(actionModal.id)
    // dispatch(deleteAsync(actionModal.id))
    setTimeout(() => {
      handleClose2()
    }, 1000)
  }

  //edit
  const [modalEdit, setModalEdit] = useState(false)
    const [dataModal, setDataModal] = useState([])
    const editarM = (p) => {
        console.log(p)
        setDataModal(p)
        setModalEdit(true)
    }

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
      <Table className='w-75 m-auto ' striped bordered hover size="sm">
        <thead>
          <tr className='text-center'>
            <th>Carrera</th>
            <th>Universidad</th>
            <th>Titulo de formacion</th>
            <th>Ciudad</th>
            <th>Duracion</th>
            {/* <th>Descripcion</th> */}
            {/* <th>Img</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {
            careeries.map((carr, index) => (
              <tr key={index} >

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
                <td className='position-relative'>
                  <div className='position-absolute top-50 start-50 translate-middle'>
                    {carr.ciudad}
                  </div>
                </td>
                {/* <td className='position-relative'>
                  <div className='position-absolute top-50 start-50 translate-middle'>
                    {carr.descripcion}
                  </div>
                </td> */}
                {/* <td className='position-relative '>
                  <div className='imgCrud d-flex align-items-center'>
                    <img className=' w-25 m-auto' src={carr.img} alt={carr.name} />
                  </div>
                </td> */}
                <td className='position-relative '>
                <div className='position-absolute top-50 start-50 translate-middle'>
                    {carr.duracion}
                  </div>
                </td>
                <td className='position-relative w-2'>
                  <div className='imgCrud d-flex align-items-center justify-content-evenly'>
                    <div onClick={() => { editarM(carr) }} className="bi bi-pencil-square text-warning"></div>
                    <div onClick={() => { eliminar(carr) }} className="bi bi-trash3 text-danger"></div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Desea eliminar este producto?</Modal.Title>
          </Modal.Header>
          {/* <Card.Img className='w-50 m-auto' variant="top" src={actionModal.img} />
          <Modal.Body className='text-center'>{actionModal.name}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={eliminarYes}>
              Yes
            </Button>
            <Button variant="primary" onClick={handleClose2}>
              Cancel
            </Button>
          </Modal.Footer> */}
        </Modal>
      </Table>
    </div>
  );
};

export default CRUDUniversity;
