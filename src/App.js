import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/Navbar/Menu';
import Formacion from './components/Formacion/Formacion';
import Experiencia from './components/Experiencia/Experiencia';
import SobreMi from './components/SobreMi/SobreMi';
import Contacto from './components/Contacto/Contacto';


const App = () => {
  return (
    <div className="App">

    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/Formacion">
          <Formacion/>
        </Route>
      </Switch>


      <Switch>
        <Route exact path="/Experiencia">
          <Experiencia/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/SobreMi">
          <SobreMi/>
        </Route>
      </Switch>

    </BrowserRouter>


    </div>
  );
}

export default App;
