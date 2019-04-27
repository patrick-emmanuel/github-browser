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
    <div style={{ border: "2px solid #008f68" }}>
      {children.map(child => (
        <AccordionSection
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
