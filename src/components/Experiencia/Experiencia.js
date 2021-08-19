import React from 'react';
import './experiencia.css';
import Card from 'react-bootstrap/Card'



const Experiencia = () =>{
    return(
         <div className="Experiencia">
         <h3 className="title-experiencia">EXPERIENCIA</h3>
         <div className="cards">
         <Card style={{ width: '18rem' }}>
           <Card.Body>
             <Card.Title>Diseñadora Freelance</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">ACTUALIDAD</Card.Subtitle>
             <Card.Text>
               Asistencia / Posteos para RR.SS / Animación / Ilustración / Edición de video / Fotogafía
             </Card.Text>
           </Card.Body>
         </Card>

         <Card style={{ width: '18rem' }}>
           <Card.Body>
             <Card.Title>Diseño tapa Revista Genios</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">2017 - 2018</Card.Subtitle>
             <Card.Text>
             Asistencia / Recorte fotográfico / Preparación de archivos / Vectorización de imágenes
             </Card.Text>
           </Card.Body>
         </Card>
         </div>
        </div>
         
    )
}

export default Experiencia;