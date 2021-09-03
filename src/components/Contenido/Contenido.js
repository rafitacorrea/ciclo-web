import React from 'react';
import './contenido.css';
import imageSala1 from '../../img/sala-1.jpg';

const Contenido = () =>{
    return(
        <div className="Contenido">
            <div className="sala">
                <div>
                    <img className="sala-image" src={imageSala1}/>
                </div>
                <div className="sala-text">
                    <h2 className="muestra">Fondo y Figura. Aira, Borges y Peralta Ramos. Círculos y Espirales.</h2>
                    <h3 className="sala-title">Sala 1</h3>
                </div>
            </div>
        </div>
    )
}

export default Contenido;