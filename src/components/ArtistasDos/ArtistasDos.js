import React from 'react';
import './artistasdos.css';
import ArtistasImg from '../ArtistasImg/ArtistasImg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Cantamessa from '../../img/cantamessa-2.jpg';
import Biyina from '../../img/biyina-ojos.jpg';
import Brickles from '../../img/eib-b.jpg';
import Marjak from '../../img/marjak.jpg';
import ArtistasCard from '../ArtistasCard.js/ArtistasCard';

const ArtistasDos = ( ) =>{
    return(
        <div className="Artistas">
            <Container className="container-artistas">
{/*                 <div className="artistas-section">
                    <h3 className="artistas-title">ARTISTAS DE LA GALERÍA</h3>
                    
                    <div className="artistas-info">
                    <Row>
                        <Col>
                        <ArtistasCard name="Cantamessa" image={Cantamessa}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Biyina" image={Biyina}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Brickles" image={Brickles}/>
                        </Col>
                        <Col>
                        <ArtistasCard name="Marjak" image={Marjak}/>
                        </Col>
                        </Row>
                        </div>
                        
                </div> */}
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