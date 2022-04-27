import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src={'https://res.cloudinary.com/lau2401/image/upload/v1651011780/Ellipse_1_jfbqbz.png'} alt="Tu Asistente Prof" />Tu Asistente Prof
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#contactanos">
             Contactanos
          </Nav.Link>
          <Nav.Link href="#nosotros">
             Sobre Nosotros
          </Nav.Link>
        </Nav>
        <Link to="/login">
            Entra
        </Link>
       
        <Link to="/register">Registrate</Link> 
       
      
      </Container>
    </Navbar>
  )
}

export default LHeader