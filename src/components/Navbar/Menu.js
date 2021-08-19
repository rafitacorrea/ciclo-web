import React, { useState } from 'react';
import './menu.css';
import Contacto from '../Contacto/Contacto';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';

const Menu = () =>{

    return(
        <Navbar ClassName="navbar">
        <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="/Formacion">formación</Nav.Link>
          <Nav.Link href="/Experiencia">experiencia laboral</Nav.Link>
          <Nav.Link href="/SobreMi">sobre mí</Nav.Link>
      <Contacto /> 
        </Nav>
        </Container>
      </Navbar>
    )
};

export default Menu;