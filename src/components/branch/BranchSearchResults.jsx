import React from "react";
import PropTypes from "prop-types";

const BranchSearchResults = ({ branches }) => (
  <div>
    {branches.map(branch => (
      <div key={branch.name}>{branch.name}</div>
    ))}
  </div>
);

BranchSearchResults.propTypes = {
  branches: PropTypes.array.isRequired
};

export default BranchSearchResults;
