import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { infoChaside } from '../../data/chaside';

const CardResult = ({ item }) => {
  return (
    <>
      {infoChaside.map((ite) =>
        ite.id === item ? (
          <Card style={{ width: '80%', margin: '0 auto' }}>
            <Card.Img
              variant='top'
              src={ite.imagen}
              style={{ height: '300px' }}
            />
            <Card.Body>
              <Card.Title>{ite.title}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title>Intereses</Card.Title>
              <Card.Text>{ite.intereses}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Aptitudes</Card.Title>
              <Card.Text>{ite.aptitudes}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        ) : null
      )}
    </>
  );
};

export default CardResult;
