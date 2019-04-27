import React, { useState } from "react";
import PropTypes from "prop-types";
import AccordionSection from "./AccordionSection";

const Accordion = ({ children }) => {
  const [openSections, setOpenSections] = useState({});

  const onClick = label => {
    const isOpen = !!openSections[label];
    setOpenSections({
      [label]: !isOpen
    });
  };

  return (
    <div className="accordion">
      {children.map(child => (
        <AccordionSection
          key={child.props.label}
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onSectionClick={onClick}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired
};

export default Accordion;
