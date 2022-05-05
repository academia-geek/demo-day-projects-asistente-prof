import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Perfil = () => {
  return (
    <div style={{ background: '#4B3F6B' }} className='mt-5 Background'>
      <Container className='py-5'>
        <Card className=' ProfileCard mx-auto'>
          <Card.Img
            className='ProfileCardBackgroundImage '
            alt='Background Image'
            variant='top'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651781957/bg-pattern-card_v7d4jo.svg'
          />
          <Card.Img
            className='ProfileCardImage '
            alt='User Image'
            src={
              'https://res.cloudinary.com/djjgtili7/image/upload/v1647294352/cld-sample.jpg'
            }
          />
          <Card.Body className='text-center ProfileCardBody '>
            <Card.Text className='TextBold mb-0'>
              Victor Crest <span className='TextMuted pl-1'>26</span>
            </Card.Text>
            <Card.Text className='TextMuted'>London</Card.Text>
          </Card.Body>
          <Card.Footer className='CardFooter'>
            <Row xs='3' className='text-center mb-1'>
              <Col>
                <Card.Text className='TextBold'>80K</Card.Text>
                <Card.Text className='TextMuted'>Followers</Card.Text>
              </Col>
              <Col>
                <Card.Text className='TextBold'>803K</Card.Text>
                <Card.Text className='TextMuted'>Likes</Card.Text>
              </Col>
              <Col>
                <Card.Text className='TextBold'>1.4K</Card.Text>
                <Card.Text className='TextMuted'>Photos</Card.Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Perfil;
