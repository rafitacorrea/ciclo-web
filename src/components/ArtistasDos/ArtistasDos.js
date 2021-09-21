import React from 'react';
import './artistasdos.css';
import ArtistasCard from '../ArtistasCard/ArtistasCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Cantamessa from '../../img/cantamessa-baja.jpg';
import Biyina from '../../img/biyina-baja.jpg';
import Brickles from '../../img/brickles-baja.jpg';
import Marjak from '../../img/marjak-baja.jpg';



const ArtistasDos = () =>{
    return(
        <div className="Artistas">
            <Container className="container-artistas">
                <div className="artistas-section">
                    <h3 className="artistas-title">ARTISTAS DE LA GALERÍA</h3>
                    {/* <div className="artistas-info"> */}
                    <Row>
                        <Col>
                        <ArtistasCard name="Pier Cantamessa" image={Cantamessa}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Biyina Klappenbach" image={Biyina}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Eduardo Iglesias Brickles" image={Brickles}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Anna-Lisa Marjak" image={Marjak}/>
                        </Col>
                        </Row>
                        {/* </div> */}
                        
                </div> 
                <div className="artistas-section">
                    <h3 className="artistas-title">OBRAS EN TRASTIENDA</h3>
                    <h5>Antonio Berni | Jeff Koons | Salvador Dalí | Fabián Burgos | Diego Gravinese | Carmelo Carrá | Ernesto Arellano | Carlos Masoch | Julio Le Parc | Ernesto Sobisch | Lea Lublin | Julio Suárez Marzal </h5>
                    <div className="espacio"></div>
                </div>
            </Container>
        </div>
    )
}

export default ArtistasDos;