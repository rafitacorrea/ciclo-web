import React, { useState } from 'react';
import './contacto.css';
import Modal from 'react-bootstrap/Modal';
import {Nav} from 'react-bootstrap';

const Contacto = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
          <Nav.Link onClick={handleShow}>CONTACTO Y VISITAS</Nav.Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton className="modal-contacto">
                    <Modal.Title>Contacto y visitas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-contacto">
                      <div className="modal-section">
                        <p className="contacto-text">Estamos en Sucre y Cazadores en el Bajo Belgrano.<br/>
                        Las visitas son programadas. Para concretar escribir a: <span>galeriaciclo@gmail.com</span> o a nuestras redes sociales.<br/>
                        En Ciclo cuidamos la distancia social y sus espacios están bien ventilados.
                         </p>
                      </div>
                  </Modal.Body>
                </Modal>
    </>
    )
};

export default Contacto;