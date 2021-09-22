import React from 'react';
import './muestramobile.css';
import Sala1 from '../../img/sala-1-mobile.jpg';
import Sala2 from '../../img/sala-2-mobile.jpg';
import Image from 'react-bootstrap/Image';


import Row from 'react-bootstrap/Row';


const Muestra = () =>{
    return(
        <div className="muestra-mobile">
            <Row>
                {/* <Col lg="6" xs="12"> */}
             <div className="sala"> 
             <a className="muestra-title" href="/exposiciones" >
                 <h2  className="muestra-title-size-mobile">Fondo y Figura.<br/>Aira, Borges y Peralta Ramos.</h2>
                 </a>
                 <h3 className="muestra-subtitle-mobile"><a className="muestra-subtitle-link" href="/Exposiciones" >SALA 1</a></h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala1} fluid /></a>
                
            </div>
            </Row>
            <Row>
            <div className="sala">
            <a className="muestra-title" href="/exposiciones" >
                <h2 className="muestra-title-size-mobile">In situ Le Chevalet.</h2>
            </a>    
            <h3 className="muestra-subtitle-mobile"><a className="muestra-subtitle-link" href="/Exposiciones" >SALA 2</a></h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala2} fluid /></a>
            </div>

            </Row>
        </div>
    )
}

export default Muestra;