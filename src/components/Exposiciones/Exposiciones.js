import React from 'react';
import './exposiciones.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sala11 from '../../img/sala-1-1.jpg';
import Sala12 from '../../img/sala-1-2.jpg';
import Sala13 from '../../img/sala-1-3.jpg';
import Sala21 from '../../img/sala-2-1.jpg';
import Sala22 from '../../img/sala-2-2.jpg';
import Sala23 from '../../img/sala-2-3.jpg';
import Image from 'react-bootstrap/Image';

const Exposiciones = () =>{
    return(
        <div className="Exposiciones">
            <Container className="container-exposiciones">
                <div className="sala-exposiciones">
                    <h3 className="sala-exposiciones-title">SALA 1</h3>
                    <h2 className="sala-exposiciones-maintitle">Ciclo Fondo y Figura<br/>Aira, Borges y Peralta Ramos<br/>Circulos y Espirales</h2>
                    <div className="sala-exposiciones-info">
                        <Row className="sala-exposiciones-img">
                            <Col xs={6} md={4}>
                                <Image src={Sala11} thumbnail />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={Sala12} thumbnail />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={Sala13} thumbnail />
                            </Col>
                        </Row>
                        <h5>tres artistas de tres ciclos en el límite entre palabra y pintura.<br/>  
                        vinculamos a las tres figuras por influencias, cruces y azar.</h5>
                        <p>en toda situación cultural hay un área de atención (figura) y un área de desatención mucho mayor (fondo). el estudio del fondo es casi imposible porque este es por definición ambiental y subliminal.<br/> construimos un anti-medio como estrategia para poner el fondo en primer plano. reunimos relaciones en el arte de las tres figuras, influencias y cruces. unidos por obras  donde predominan los  círculos y espirales.<br/>aquí cada artista es el centro y no tiene límite. esferas que se conectan como en un circuito y proyectan un fondo que forma la estructura de conciencia, la forma de ver o los términos por los cuales percibimos la figura.)</p>
                        <h5>pinturas, dibujos, libros, cartas astrales, textos, fotos y videos:</h5>
                        <p>césar aira | juan andralis | trilce andralis | juan batlle planas | jorge luis borges | norah borges | sandra contreras  | copi | maría gainza | francisco garamona | daniel garcía | jorge glusberg | sebastián gordín | grupo cruz del sur: (pedro roth, julián borobio, pier cantamessa, lotty inchauspe) |  annemarie heinrich | nora iniesta | fabio kacero | fernanda  laguna | luisa mercedes levinson | lux lindner | silvina ocampo | cecilia pavón | federico manuel peralta ramos | roberto plate | alfredo prior | xul solar  | clorindo testa | ral veroni</p>
                    </div>
                </div>
                <div className="sala-exposiciones">
                    <h3 className="sala-exposiciones-title">SALA 2</h3>
                    <h2 className="sala-exposiciones-maintitle">In situ Le Chevalet</h2>
                    <div className="sala-exposiciones-info">
                    <Row className="sala-exposiciones-img">
                            <Col xs={6} md={4}>
                                <Image src={Sala21} thumbnail />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={Sala22} thumbnail />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={Sala23} thumbnail />
                            </Col>
                        </Row>
                        <p> en 1981, un bistró de la calle ecuador de la ciudad de buenos aires se convirtió en el centro reunión de músicos y artistas que noche a noche, durante seis meses, desafiaron las prohibiciones de la dictadura para hacer arte en lo que se llamó bar le chevalet.</p>
                        <p>rodeados de pinturas y grafitis federico peralta ramos, boto jordán, andrés calamaro, gamexane, diana nylon,  los violadores, el grupo caviar y muchos otros fueron artífices y artificio del primer bar punk de latinoamérica.</p>
                        <p><span>pinturas:</span> boto jordán<br/>
                        <span>menú de la época revisitado y fotos:</span> paul-jean azema<br/>
                        <span>documentación:</span> daniela lucena y gisela laboureau <br/>
                        <span>curaduría:</span> alejandro maría correa y juan pablo correa<br/>
                        <span>muestra virtual:</span> www.lechevalet.com.ar  </p>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default Exposiciones;