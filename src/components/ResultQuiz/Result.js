import React from 'react';
import { Container } from 'react-bootstrap';
import CardResult from './CardResult';

const Result = ({ focus }) => {
  return (
    <Container style={{ display: 'flex' }}>
      {focus.map((item) => (
        <div key={item.id} className='conten'>
          <p>
            {item.id === 'c' ? (
              <CardResult item={item.id} />
            ) : item.id === 'h' ? (
              <CardResult item={item.id} />
            ) : item.id === 'a' ? (
              <CardResult item={item.id} />
            ) : item.id === 's' ? (
              <CardResult item={item.id} />
            ) : item.id === 'i' ? (
              <CardResult item={item.id} />
            ) : item.id === 'd' ? (
              <CardResult item={item.id} />
            ) : item.id === 'e' ? (
              <CardResult item={item.id} />
            ) : null}
          </p>
        </div>
      ))}
    </Container>
  );
};

export default Result;
