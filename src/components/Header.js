import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/Header.scss";
import LOGO from "../assets/LOGO.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt="Kasa Logo" />
        </Link>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <Link to="/Home">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
