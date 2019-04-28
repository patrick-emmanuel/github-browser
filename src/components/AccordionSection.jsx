import React from "react";
import PropTypes from "prop-types";

const AccordionSection = ({ children, onSectionClick, label, isOpen }) => {
  const onClick = () => {
    onSectionClick(label);
  };

  return (
    <div>
      <div
        onClick={onClick}
        className="accordion-section"
        data-testid="accordion-section"
      >
        {label}
        <div>
          {!isOpen && <span>&#9650;</span>}
          {isOpen && <span>&#9660;</span>}
        </div>
      </div>
      {isOpen && <div className="accordion-section-content">{children}</div>}
    </div>
  );
};

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onSectionClick: PropTypes.func.isRequired
};
export default AccordionSection;
