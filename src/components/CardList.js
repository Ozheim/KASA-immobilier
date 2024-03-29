import React from "react";
import Card from "./Card";
import "../styles/components/Logements.scss";
import logementsData from "../data/logement.json";

const Logements = () => {
  return (
    <div className="logements">
      {logementsData.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          id={logement.id}
        />
      ))}
    </div>
  );
};

export default Logements;
