import React from "react";
import PropTypes from "prop-types";

const AccordionSection = ({
  children,
  onSectionClick,
  label,
  starsCount,
  privateRepo,
  isOpen
}) => {

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
        <div className="repoInfo" aria-labelledby="repoInfo">
          <div className="repoName">
            {!isOpen && <i className="far fa-plus-square fa-lg" />}
            {isOpen && <i className="far fa-minus-square fa-lg" />}
            <p>{label}</p>
          </div>
          <div className="repoDescription" aria-labelledby="repoInfo">
            <span>
              <span className="repoStars">{starsCount}</span>
              {starsCount > 0 ? (
                <i className="fas fa-star blue" />
              ) : (
                <i className="fas fa-star" />
              )}
            </span>
            <span className="repoType">
              {privateRepo ? (
                <i className="fas fa-lock" data-tip data-for="private" />
              ) : (
                <i className="fas fa-unlock" data-tip data-for="public" />
              )}
            </span>
          </div>
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