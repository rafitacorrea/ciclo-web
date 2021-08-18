import React from 'react';
import './formacion.css';
import Table from 'react-bootstrap/Table'
import Skills from '../Skills/Skills';

const Formacion = () =>{
    return(
          <div className="Formacion">
            <h3 className="title-formacion">FORMACION</h3>
            <Table className="tabla" responsive="sm">
                <tbody>
                  <tr>
                    <td>ACTUALIDAD</td>
                    <td>Desarrollo FullStack</td>
                    <td>Codear Futur@ - Media Chicas</td>
                  </tr>
                  <tr>
                    <td>ACTUALIDAD</td>
                    <td>Skill Factory Squad</td>
                    <td>Avalith</td>
                  </tr>
                  <tr>
                    <td>2019</td>
                    <td>Desarrollo Front-End</td>
                    <td>Escuela Ada</td>
                  </tr>
                  <tr>
                    <td>2015-2017</td>
                    <td>Diseño Multimedial</td>
                    <td>Escuela Da Vinci</td>
                   </tr>
                   <tr>
                    <td>2014</td>
                    <td>Primer año Diseño Multimedial</td>
                    <td>Universidad Maimónides</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>Fotografía</td>
                    <td>Escuela Argentina de Fotografía</td>
                  </tr>
                </tbody>
            </Table> 
            <Skills/>
        </div>
    )
}

export default Formacion;