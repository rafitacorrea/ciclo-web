import React from 'react';
import './home.css';
import imageHome from '../../img/home.jpg';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = ()=>{
    return(
        <div className="Home">

          <div className="banner">
              <Row className="row-home">
                <Col lg="6" xs="12">
            <div className="banner-text">
              <h2 className="banner-title-first">revista ciclo galería de arte</h2>
              <h2 className="banner-title">un anti-medio en donde artistas, poetas, escritores y fotógrafos forman un organismo vivo.</h2>
            </div>
            </Col>
            <Col lg="6" xs="12" className="banner-image banner-desktop" >
            <div >
              <img className="image-home" src={imageHome} alt="imagen cuadro con espirales"/> 
            </div>
            </Col>
            </Row>

          </div>

        </div>
    )
}

export default Home;