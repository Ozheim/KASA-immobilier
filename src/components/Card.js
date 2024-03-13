import React from "react";
import "../styles/components/Card.scss";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/fiches-logement/${id}`} className="card-link">
      <div className="card" key={id}>
        <img className="card-cover" src={cover} alt={title} />
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};

export default Card;
