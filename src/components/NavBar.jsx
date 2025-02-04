import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/">Inicio</NavLink>
            </li>
            <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/about">Acerca de</NavLink>
            </li>
            <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/services">Servicios</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


