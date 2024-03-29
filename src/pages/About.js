import React from "react";
import Accordion from "../components/Accordion";
import montagneImage from "../assets/montagne.jpg";
import "../styles/pages/About.scss";
const About = () => {
  return (
    <div className="about">
      <img
        src={montagneImage}
        alt="Image d'une montagne"
        className="about-picture"
      />
      <div className="Accordion-group">
        <Accordion title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une Fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Accordion>
        <Accordion title="Respect">
          <p>
            La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entrainera une exclusion de notre plateforme.
          </p>
        </Accordion>
        <Accordion title="Service">
          <p>
            La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entrainera une exclusion de notre plateforme.
          </p>
        </Accordion>
        <Accordion title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos Hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
