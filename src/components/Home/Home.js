import React from 'react';
import './home.css';
import Contacto from '../Contacto/Contacto';

const Home = ()=>{
    return(
        <div className="Home">
            <div className="title">
                <h2 className="hola">HO</h2>
                <h2 className="hola">LA</h2>
            </div>
            <div className="presentation">
                <p className="intro">soy rafaela correa marjak</p>
                <p className="about">trainee software engineer / diseñadora multimedia / artista visual</p>
            </div>
        </div>
    )
}

export default Home;