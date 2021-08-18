import React from 'react';
import './intro.css';
import icon from '../../img/retrato.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa";

const Intro = () => {
    return(
        <header>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image className="avatar" src={icon} roundedCircle/>  
                </Col>
                </Row>

                <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="intro">Trainee Software Engineer</h2>
                    <h2 className="intro">artista visual, a veces diseñadora gráfica</h2>
                    <h2 className="intro">pero siempre fanática de Britney Spears.</h2>
                    </Col>
                
                </Row>

                <Row className="justify-content-md-center">
                <Col md="auto">
                    <FaHtml5 className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaCss3Alt className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaSass className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaJsSquare className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaReact className="skill-icon"/>
                </Col>
                </Row>

            </Container>
        </header>
    );
}
export default Intro;