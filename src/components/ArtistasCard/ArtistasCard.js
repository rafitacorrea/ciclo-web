import React from 'react';
import './artistascard.css';
import Card from 'react-bootstrap/Card'

const ArtistasCard = ({name, image}) =>{

    return(
        <div>
            <Card className="card-estilo" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
             <Card.Body>
                <Card.Title>{name}</Card.Title>
  </Card.Body>
</Card>
        </div>
    )
}

export default ArtistasCard;