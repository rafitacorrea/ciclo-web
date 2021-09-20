import React from 'react';
import './muestra.css';
import Sala1 from '../../img/sala-1.jpg';
import Sala2 from '../../img/sala-2.jpg';
import Image from 'react-bootstrap/Image';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Muestra = () =>{
    return(
        <div className="muestra">
            <Row>
                <Col lg="6" xs="12">
             <div className="sala"> 
             <a className="muestra-title" href="/Exposiciones" >
                 <h2  className="muestra-title-size">Fondo y Figura. Aira, Borges y Peralta Ramos.<br/>Círculos y Espirales.</h2>
                 </a>
                <h3 className="muestra-subtitle">SALA 1</h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala1} fluid /></a>
                
            </div>
            </Col>
            <Col lg="6" xs="12">
            <div className="sala">
            <a className="muestra-title" href="/Exposiciones" >
                <h2 className="muestra-title-size">In situ Le Chevalet.</h2>
            </a>    
                <h3 className="muestra-subtitle">SALA 2</h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala2} fluid /></a>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default Muestra;