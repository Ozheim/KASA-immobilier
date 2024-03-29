import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/layout/Header.scss";
import LOGO from "../assets/LOGO.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/home">
          <img src={LOGO} alt="Kasa Logo" />
        </NavLink>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Home"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
