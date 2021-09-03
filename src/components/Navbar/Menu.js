import React from 'react';
import './menu.css';
import logo from '../../img/ciclo.png';
import Contacto from '../Contacto/Contacto';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Menu = () =>{

    return(
      <div className="Menu">
        <Container className="top">
        <a href="/"><img className="logo" src={logo} alt="logo ciclo"/></a>
          <ul>
            <a className="language" href="/">ESPAÑOL</a>
            <a className="language" href="/">ENGLISH</a>
          </ul>
          </Container>
          
        <Navbar collapseOnSelect expand="lg" >
        <Container className="hola"> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">GALERÍA</Nav.Link>
              <Nav.Link href="/Exposiciones">EXPOSICIONES</Nav.Link>
              <Nav.Link href="#">ARTISTAS Y TRASTIENDA</Nav.Link>
              <Contacto href="#">VISITAS Y CONTACTO</Contacto>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.instagram.com/revista.ciclo/" target="_blank"><FaInstagram/></Nav.Link>
              <Nav.Link href="https://twitter.com/revistaciclo" targer="_blank"><FaTwitter/></Nav.Link>
            </Nav>
         </Navbar.Collapse>
         </Container>
        </Navbar>
        
      </div>
    )
};

export default Menu;