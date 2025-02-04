import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Header } from './components/Header'
import { NavBar } from './components/NavBar';
import { Tecnologia } from './components/Tecnologia';
import { Experiencia } from './components/Experiencia';
import { Proyectos } from './components/Proyectos';


function Home() {
  return <h1>Página de Inicio</h1>;
}

function About() {
  return <h1>Acerca de Nosotros</h1>;
}

function Services() {
  return <h1>Servicios</h1>;
}

function App() {
  return (
    <section className='App'>
      {/* <Router>
        <NavBar>
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </NavBar>
      </Router> */}
      <Header></Header>
      <Tecnologia></Tecnologia>
      <Experiencia></Experiencia>
      <Proyectos></Proyectos>
    </section>
  );
}

export default App;
