import React from 'react';
import './footer.css';
import logo from '../../img/ciclo-negro.jpg';
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Container from 'react-bootstrap/Container';

const Footer = () =>{
    return(
        <div className="Footer">
        <Container className="container-footer">
                <div><img className="footer-logo" src={logo} alt="logo ciclo"/></div>
                <div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/revista.ciclo/"><FaInstagram/></a>
                        <a href="https://twitter.com/revistaciclo"><FaTwitter/></a>
                    </div>
                    <h5>© 2021 Galería Revista Ciclo<br/>Bajo Belgrano. Buenos Aires.<br/>galeriaciclo@gmail.com</h5>
                </div>
                <ul>
                    <a className="language-footer" href="/">ESPAÑOL</a>
                    <a className="language-footer" href="/">ENGLISH</a>
                </ul>

        </Container>
        </div>
    )
}

export default Footer;