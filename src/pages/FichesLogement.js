import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import logementsData from "../data/logement.json";
import "../styles/pages/FichesLogements.scss";
import Accordion from "../components/Accordion";

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = logement?.pictures?.length;

  if (!logement) {
    return <Navigate to="/NotFound" />;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="fiche-logement">
      <div className="carousel-container">
        <div className="carousel-image-container">
          {logement.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`View ${index}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          ))}
        </div>
        <div className="carousel-controls">
          <div className="carousel-arrow left" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="carousel-indicator">{`${
            currentIndex + 1
          }/${totalImages}`}</div>
          <div className="carousel-arrow right" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="content-title-rating">
        <div className="content-title">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <div>{logement.location}</div>
          </div>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="wrapper">
          <div className="host-and-rating">
            <div className="host-info">
              <div className="host-name">{logement.host.name}</div>
              <img
                src={logement.host.picture}
                alt={`Hôte : ${logement.host.name}`}
                className="host-picture"
              />
            </div>
          </div>
          <div className="rating">
            {[...Array(5)].map((star, index) => {
              return index < logement.rating ? (
                <i key={index} className="fa-solid fa-star"></i>
              ) : (
                <i key={index} className="fa-solid fa-star grey"></i>
              );
            })}
          </div>
        </div>
      </div>
      <div className="accordion-section">
        <Accordion title="Description">
          <p>{logement.description}</p>
        </Accordion>
        <Accordion title="Équipement">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default FicheLogement;
