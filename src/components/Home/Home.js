import React from 'react';
import './home.css';
import imageHome from '../../img/home.jpg';
import Container from 'react-bootstrap/Container';

const Home = ()=>{
    return(
        <div className="Home">
          <div className="banner">
            <Container className="banner">
            <div className="banner-text">
              <h2 className="banner-title">galería revista ciclo es un anti-medio que presenta artistas, poetas, escritores y fotógrafos en un ensayo visual en vivo.</h2>
              <h3 className="'">los links son la nueva forma de ver la realidad y así cada espectador crea su propia obra.</h3>
            </div>
            <div className="banner-image">
              <img className="image-home" src={imageHome} alt="imagen cuadro con espirales"/>
            </div>
            </Container>
          </div>
        </div>
    )
}

export default Home;