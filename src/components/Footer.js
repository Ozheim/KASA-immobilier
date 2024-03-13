import React from "react";
import LOGO from "../assets/LOGO_blanc.png";
import "../styles/layout/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-style">
        <img src={LOGO} alt="Kasa Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
