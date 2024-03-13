import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="./Home">Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default NotFound;
