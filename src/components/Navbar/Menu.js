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
  <Container>
        <Container className="top">
        <a href="/"><img className="logo" src={logo} alt="logo ciclo"/></a>
          <ul>
            <a className="language" href="/">ESPAÑOL</a>
            <a className="language" href="/">ENGLISH</a>
          </ul>
          </Container>

        <Navbar collapseOnSelect expand="lg" >
 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-mobile"/> 
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">GALERÍA</Nav.Link>
              <Nav.Link href="/exposiciones">EXPOSICIONES</Nav.Link>
              <Nav.Link href="/artistas">ARTISTAS Y TRASTIENDA</Nav.Link>
              {/* <Nav.Link href="../../../public/revista.html" target="_blank" rel="noreferrer">REVISTA</Nav.Link> */}
              <Contacto href="#">VISITAS Y CONTACTO</Contacto>
            </Nav>
            <Nav> 
              <Nav.Link href="https://www.instagram.com/galeriaciclo/" target="_blank" rel="noreferrer"><FaInstagram/></Nav.Link>
              <Nav.Link href="https://twitter.com/galeriaciclo" target="_blank" rel="noreferrer"><FaTwitter/></Nav.Link>
            </Nav>
         </Navbar.Collapse>

        </Navbar>

        <Container className="logo-mobile">
        <a href="/"><img className="logo" src={logo} alt="logo ciclo"/></a>
          </Container>

        </Container>
      </div>
        
    )
};

export default Menu;