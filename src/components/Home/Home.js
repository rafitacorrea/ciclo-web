import React from 'react';
import './home.css';
import imageHome from '../../img/home.jpg';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = ()=>{
    return(
        <div className="Home">

          <div className="banner">
              <Row className="banner-image">
                <Col lg="6" xs="12">
            <div className="banner-text">
              <h2 className="banner-title">Revista Ciclo es una galería de arte. Un anti-medio en donde artistas, poetas, escritores y fotógrafos forman un organismo vivo.</h2>
              <h3 className="banner-subtitle">Un lugar en donde los espectadores crean la obra.</h3>
            </div>
            </Col>
            <Col lg="6" xs="12" className="banner-image banner-desktop" >
            <div className="banner-image">
              <img className="image-home" src={imageHome} alt="imagen cuadro con espirales"/> 
            </div>
            </Col>
            </Row>

          </div>

        </div>
    )
}

export default Home;