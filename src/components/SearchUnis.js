import React, { useEffect } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import {
  paintCareerAsync,
  searchCareersync,
} from '../redux/actions/actionUniversity';

const SearchUnis = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    busqueda: '',
  });
  const { busqueda } = values;

  useEffect(() => {
    dispatch(paintCareerAsync());
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda);
    dispatch(searchCareersync(busqueda));
  };

  return (
    <Form className='w-75 mx-auto my-0' onSubmit={handleSubmit}>
      <InputGroup className='mb-3 '>
        <FormControl
          placeholder='Buscar carrera'
          name='busqueda'
          onChange={handleInputChange}
        />
        <Button variant='outline-secondary' type='submit'>
          <i className='bi bi-search'></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchUnis;
