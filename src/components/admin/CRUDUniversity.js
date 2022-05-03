import React, { useEffect, useState } from 'react';
import { Button, Form, ListGroup, ListGroupItem, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useForm } from '../../Hooks/useForm';
import { addCareerAsync, deleteCareerAsync, paintCareerAsync } from '../../redux/actions/actionUniversity';
import '../../style/unis.css'

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
    idCarrera: uuid(),
  });
  const { universidad, titulo, descripcion, carrera, duracion, ciudad } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addCareerAsync(values));
    reset();
  };

  // action delete
  const [objModal, setAObjModal] = useState([])
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const eliminar = (p) => {
    handleShow2()
    setAObjModal(p)
  }

  const eliminarYes = () => {
    console.log(objModal.idCarrera)
    dispatch(deleteCareerAsync(objModal.idCarrera))
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
      <h1 className='text-center'>Agregar Formación Academica</h1>
      <Form onSubmit={handleSubmit} className='w-75 mx-auto my-5'>
        <Form.Label>Universidad</Form.Label>
        <Form.Select
          name="universidad"
          onChange={handleInputChange}
          value={universidad}
        >
          <option>Selecciona universidad</option>
          <option>Universidad Nacional de Colombia</option>
          <option>Pontificia Universidad Javeriana</option>
          <option>Universidad Icesi</option>
        </Form.Select>
        <Form.Label htmlFor='ciu'>Ciudad</Form.Label>
        <Form.Select name='ciudad' onChange={handleInputChange} value={ciudad}>
          <option>Selecciona Ciudad</option>
          <option>Bogota</option>
          <option>Medellin</option>
          <option>Cali</option>
          <option>Cartagena</option>
        </Form.Select>
        <Form.Label htmlFor='tit'>Titulo de formacion</Form.Label>
        <Form.Select name='titulo' onChange={handleInputChange} value={titulo}>
          <option>Titulo</option>
          <option>Profesional</option>
          <option>Tecnico</option>
          <option>Tecnologo</option>
        </Form.Select>
        <Form.Label htmlFor='tit'>Area de la carrera</Form.Label>
        <Form.Select name='area' onChange={handleInputChange} >
          <option>Area</option>
          <option value={'c'}>Administrativas y Contables</option>
          <option value={'h'}>Humanísticas y Sociales</option>
          <option value={'a'}>Artísticas</option>
          <option value={'s'}>Medicina y Cs. de la Salud </option>
          <option value={'i'}>Ingeniería y Computación </option>
          <option value={'d'}>Defensa y Seguridad </option>
          <option value={'e'}>Ciencias Exactas y Agrarias</option>
        </Form.Select>

        <Form.Label htmlFor="car">
          Carrera
        </Form.Label>

        <Form.Control
          type="text"
          id="car"
          name="carrera"
          placeholder="Carrera"
          value={carrera}
          onChange={handleInputChange}
        />
        <Form.Label htmlFor="dur">
          Duracion
        </Form.Label>

        <Form.Select
          name="duracion"
          onChange={handleInputChange}
          value={duracion}
        >
          <option defaultValue>
            Selecciona Duracion(Semestres)
          </option>
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
        <Form.Label htmlFor="desc">
          Descripcion
        </Form.Label>
        <Form.Control
          as="textarea"
          id="desc"
          name="descripcion"
          placeholder="Descripcion"
          value={descripcion}
          onChange={handleInputChange}
        />

        <Button type='submit' variant="success" className='m-4'>Agregar</Button>
        {/* <Button  variant="warning" className='m-4' onClick={()=>{reset()}}>Resetear formulario</Button> */}
        <Button  variant="primary" className='m-4' onClick={()=>{dispatch(paintCareerAsync())}}>ver todas de carreras</Button>
      </Form>
      <Table className='w-75 mx-auto my-4' striped bordered hover size="sm">
        <thead>
          <tr className='text-center'>
            <th>Carrera</th>
            <th>Universidad</th>
            <th>Titulo de formacion</th>
            <th>Área</th>
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
                <td className='position-relative' id={carr.area}>
                  <div className='position-absolute top-50 start-50 translate-middle'>
                    {carr.area}
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
            <Modal.Title>Desea eliminar esta carrera?</Modal.Title>
          </Modal.Header>
          <Modal.Body className=''>
            <ListGroup className="list-group-flush">
              <ListGroupItem><span className='fw-bold'>Universidad: </span>{objModal.universidad}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Ciudad: </span>{objModal.ciudad}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Titulo: </span>{objModal.titulo}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Carrera: </span>{objModal.carrera}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Area: </span>{objModal.area}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Duracion: </span>{objModal.duracion}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Descripcion: </span>{objModal.descripcion}</ListGroupItem>
              <ListGroupItem><span className='fw-bold'>Id: </span>{objModal.idCarrera}</ListGroupItem>
            </ListGroup>
          </Modal.Body>
          {/* <Card.Img className='w-50 m-auto' variant="top" src={objModal.img} /> */}
          <Modal.Footer>
            <Button variant="danger" onClick={eliminarYes}>
              Si
            </Button>
            <Button variant="primary" onClick={handleClose2}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>
    </div>
  );
};

export default CRUDUniversity;
