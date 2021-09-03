import React from 'react';
import './muestra.css';
import Sala1 from '../../img/sala-1.jpg';
import Sala2 from '../../img/sala-2.jpg';
import Image from 'react-bootstrap/Image'

const Muestra = () =>{
    return(
        <div className="muestra">
            <div className="sala">
                <h2 className="muestra-title">Fondo y Figura. Aira, Borges y Peralta Ramos.<br/>Círculos y Espirales.</h2>
                <h3 className="muestra-subtitle">SALA 1</h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala1} fluid /></a>
            </div>
            <div className="sala">
                <h2 className="muestra-title">In situ Le Chevalet.</h2>
                <h3 className="muestra-subtitle">SALA 2</h3>
                <a href="/Exposiciones" ><Image className="sala-img" src={Sala2} fluid /></a>
            </div>

        </div>
    )
}

export default Muestra;