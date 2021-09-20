import React from 'react';
import './artistas.css';
import ArtistasImg from '../ArtistasImg/ArtistasImg';
import Container from 'react-bootstrap/Container';

import Cantamessa from '../../img/cantamessa-2.jpg';
import Biyina from '../../img/biyina-ojos.jpg';
import Brickles from '../../img/eib-b.jpg';
import Marjak from '../../img/marjak.jpg';

const Artistas = ( ) =>{
    return(
        <div>
            <Container>
                <div className="artistas-section">
                    <h3 className="artistas-title">ARTISTAS DE LA GALERÍA</h3>
                    <div className="artistas-info">
                        <ArtistasImg name="Pier Cantamessa" image={Cantamessa}></ArtistasImg>
                        <ArtistasImg name="Biyina Klappenbach" image={Biyina}></ArtistasImg>
                        <ArtistasImg name="Eduardo Iglesias Brickles" image={Brickles}></ArtistasImg>
                        <ArtistasImg name="Anna-Lisa Marjak" image={Marjak}></ArtistasImg>
                        </div>
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

export default Artistas;