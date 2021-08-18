import React from 'react';
import './skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa";


const Skills = () =>{
    return(
            <Container className="skills">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <FaHtml5 className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaCss3Alt className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaJsSquare className="skill-icon"/>
                </Col>
                <Col md="auto">
                    <FaReact className="skill-icon"/>
                </Col>
                </Row>
            </Container>
    )
};

export default Skills;