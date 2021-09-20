import React from 'react';
import './menu.css';
import logo from '../../img/ciclo.png';
import Contacto from '../Contacto/Contacto';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Menu = () =>{

    return(
      <div className="Menu">
{/*         <Container className="top">
          <Row>
            <Col lg={3} xs={10}>
              <a href="/"><img className="logo" src={logo} alt="logo ciclo"/></a>
            </Col>
          </Row>
          </Container> */}
          
        <Navbar collapseOnSelect expand="lg">
        <Container className="container-menu"> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-responsive"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">GALERÍA</Nav.Link>
              <Nav.Link href="/Exposiciones">EXPOSICIONES</Nav.Link>
              <Nav.Link href="/Artistas">ARTISTAS Y TRASTIENDA</Nav.Link>
              <Nav.Link href="../public/revista.html" target="_blank">REVISTA</Nav.Link>
              <Contacto href="#">VISITAS Y CONTACTO</Contacto>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.instagram.com/galeriaciclo/" target="_blank"><FaInstagram/></Nav.Link>
              <Nav.Link href="https://twitter.com/galeriaciclo" target="_blank"><FaTwitter/></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><a className="language" href="/">ESP</a></Nav.Link>
              <Nav.Link><a className="language" href="/">ENG</a></Nav.Link>
            </Nav>
         </Navbar.Collapse>
         </Container>
        </Navbar>

        <Container className="bottom">
          <Row>
            <Col lg={3} xs={10}>
              <a href="/"><img className="logo" src={logo} alt="logo ciclo"/></a>
            </Col>
          </Row>
          </Container>
        
      </div>
    )
};

export default Menu;


 
<Navbar collapseOnSelect expand="lg" >
<Container className="hola"> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">GALERÍA</Nav.Link>
      <Nav.Link href="/Exposiciones">EXPOSICIONES</Nav.Link>
      <Nav.Link href="/Artistas">ARTISTAS Y TRASTIENDA</Nav.Link>
      <Contacto href="#">VISITAS Y CONTACTO</Contacto>
    </Nav>
    <Nav>
      <Nav.Link href="https://www.instagram.com/revista.ciclo/" target="_blank"><FaInstagram/></Nav.Link>
      <Nav.Link href="https://twitter.com/revistaciclo" targer="_blank"><FaTwitter/></Nav.Link>
    </Nav>
 </Navbar.Collapse>
 </Container>
</Navbar>
</Container>