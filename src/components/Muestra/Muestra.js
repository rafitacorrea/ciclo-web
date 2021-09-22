import React from 'react';
import './muestra.css';
import Sala1 from '../../img/sala-1.jpg';
import Sala2 from '../../img/sala-2.jpg';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import MuestraMobile from '../MuestraMobile/MuestraMobile'


const Muestra = () =>{
    return(
        <div className="muestra">
            <div className="muestra-desktop">
            <Row>
                {/* <Col lg="6" xs="12"> */}
             <div className="sala"> 
             <a className="muestra-title" href="/exposiciones" >
                 <h2  className="muestra-title-size">Fondo y Figura.<br/>Aira, Borges y Peralta Ramos.</h2>
                 </a>
                 <h3 className="muestra-subtitle"><a className="muestra-subtitle-link" href="/Exposiciones" >SALA 1</a></h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala1} fluid /></a>
                
            </div>
            </Row>
            <Row>
            <div className="sala">
            <a className="muestra-title" href="/exposiciones" >
                <h2 className="muestra-title-size">In situ Le Chevalet.</h2>
            </a>    
            <h3 className="muestra-subtitle"><a className="muestra-subtitle-link" href="/Exposiciones" >SALA 2</a></h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala2} fluid /></a>
            </div>

            </Row>
            </div>
            <div className="muestra-mobile">
                <MuestraMobile/>
            </div>
        </div>
    )
}

export default Muestra;