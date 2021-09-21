import React, { useState } from 'react';
import './artistas-img.css';
import Modal from 'react-bootstrap/Modal';
import {Nav} from 'react-bootstrap';

const ArtistasImg = ({name, image}) =>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return(
          <>
            <Nav.Link onClick={handleShow} className="artistas-name">{name}</Nav.Link>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="modal-artistas">
                      <img src={image} alt="#"/>
                    </Modal.Header>
                  </Modal>
      </>
      )
  };
  
  export default ArtistasImg;