import React, { useState } from 'react';
import './contacto.css';
import Modal from 'react-bootstrap/Modal';
import {Nav} from 'react-bootstrap';
import { RiMailFill, RiGlobalLine, RiLinkedinBoxFill, RiHome2Fill, RiGithubFill} from "react-icons/ri";

const Contacto = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
          <Nav.Link onClick={handleShow}>CONTACTO</Nav.Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton className="modal-contacto">
                    <Modal.Title>Contactame :)</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-contacto">
                      <div className="modal-section">
                      <RiGlobalLine className="contacto-icon"/>
                        <a href="http://rafitacorrea.com.ar" target="_blank" className="contacto-text">www.rafitacorrea.com.ar</a>
                      </div>
                      <div className="modal-section">
                      <RiLinkedinBoxFill className="contacto-icon"/>
                        <a href="https://www.linkedin.com/in/rafaela-correa-marjak/" target="_blank" className="contacto-text">Rafaela Correa Marjak</a>
                      </div>
                      <div className="modal-section">
                      <RiGithubFill className="contacto-icon"/>
                        <a href="https://github.com/rafitacorrea" target="_blank" className="contacto-text">rafitacorrea</a>
                      </div>
                      <div className="modal-section">
                        <RiMailFill className="contacto-icon"/>
                        <p className="contacto-text">rafitacorrea@yahoo.com.ar</p>
                      </div>
                      <div className="modal-section">
                        <RiHome2Fill className="contacto-icon"/>
                        <p className="contacto-text">CABA, Buenos Aires, Argentina</p>
                      </div>
                  </Modal.Body>
                </Modal>
    </>
    )
};

export default Contacto;