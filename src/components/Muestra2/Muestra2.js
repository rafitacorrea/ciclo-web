import React from 'react';
import './muestra2.css';
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
             
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala1} fluid /></a>
                
            </div>
            </Col>
            <Col lg="6" xs="12"> 
            <div className="sala">
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala2} fluid /></a>
            </div>
            </Col>
            </Row> 
        </div>

    )
}

export default Muestra;