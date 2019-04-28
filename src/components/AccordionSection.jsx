import React from "react";
import PropTypes from "prop-types";

const AccordionSection = ({ children, onSectionClick, label, isOpen }) => {
  const onClick = () => {
    onSectionClick(label);
  };

  return (
    <li>
      <div
        onClick={onClick}
        className="accordion-section"
        data-testid="accordion-section"
      >
        <div className="repoName">
          <i className="fas fa-code-branch" />
          <p>{label}</p>
        </div>
        <div>
          {!isOpen && <span>&#9650;</span>}
          {isOpen && <span>&#9660;</span>}
        </div>
      </div>
      {isOpen && <div className="accordion-section-content">{children}</div>}
    </li>
  );
};

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onSectionClick: PropTypes.func.isRequired
};
export default AccordionSection;
