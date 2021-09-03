import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/Navbar/Menu';
import Muestra from './components/Muestra/Muestra';
import Footer from './components/Footer/Footer';
import Exposiciones from './components/Exposiciones/Exposiciones';


const App = () => {
  return (
    <div className="App">

    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route exact path="/">
          <Home/>
          <Muestra/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/Exposiciones">
          <Exposiciones/>
        </Route>
      </Switch>

    <Footer/>

    </BrowserRouter>


    </div>
  );
}

export default App;
