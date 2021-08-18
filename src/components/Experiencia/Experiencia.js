import React from 'react';
import './experiencia.css';
import Table from 'react-bootstrap/Table'

const Experiencia = () =>{
    return(
         <div className="Experiencia">
         <h3 className="title-experiencia">EXPERIENCIA</h3>
            <Table className="tabla-exp" responsive="sm">
                <tbody>
                  <tr>
                    <td>ACTUALIDAD</td>
                    <td>Diseñadora Freelance</td>
                    <td>Asistencia / Posteos para RR.SS / Animación / Ilustración / Edición de video / Fotogafía</td>
                  </tr>
                  <tr>
                    <td>2017 - 2018</td>
                    <td>Diseño tapa Revista Genios</td>
                    <td>Asistencia / Recorte fotográfico / Preparación de archivos / Vectorización de imágenes</td>
                  </tr>
                </tbody>
            </Table>
        </div>
         
    )
}

export default Experiencia;