import React from 'react';
import './footer.css';
import logo from '../../img/ciclo-negro.jpg';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () =>{
    return(
        <div className="Footer">
                <Container className="container-footer">
                <Row>
                    <Col>
                                <div><img className="footer-logo" src={logo} alt="logo ciclo"/></div>
                    </Col>
                    <Col>
                <div>
                    <div className="footer-social">
                        <a className="footer-social-icon" href="https://www.instagram.com/galeriaciclo/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a className="footer-social-icon" href="https://twitter.com/galeriaciclo" target="_blank" rel="noreferrer"><FaTwitter/></a>
                    </div>
                    <h5 className="footer-text">© 2021 Galería Revista Ciclo<br/>Bajo Belgrano. Buenos Aires.<br/>galeriaciclo@gmail.com</h5>
                    <ul className="ul-language-footer-mobile">
                         <a className="language-footer-mobile" href="/">ESPAÑOL</a>
                        <a className="language-footer-mobile" href="/">ENGLISH</a>
                    </ul>
                </div>
                </Col>
                <Col>
                <ul className="ul-language-footer">
                    <a className="language-footer" href="/">ESPAÑOL</a>
                    <a className="language-footer" href="/">ENGLISH</a>
                </ul>
                </Col>
                </Row>
        </Container>
        </div>
    )
}

export default Footer;