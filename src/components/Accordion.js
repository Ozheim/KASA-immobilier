import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/Accordion.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <button onClick={toggleAccordion} className="accordion-header">
        {title}
        <i className="chevron fa fa-chevron-up" />
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
