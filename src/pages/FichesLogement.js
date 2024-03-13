import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logementsData from "../data/logement.json";
import "../styles/pages/FichesLogements.scss";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="./NotFound" />;
  }

  return (
    <div className="fiche-logement">
      <img
        src={logement.cover}
        alt={"Couverture de " + logement.title}
        className="fiche-logement-cover"
      />
      <div className="fiche-logement-info">
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
      </div>
    </div>
  );
};

export default FicheLogement;
