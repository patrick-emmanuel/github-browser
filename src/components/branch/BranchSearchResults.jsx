import React from "react";
import PropTypes from "prop-types";

const BranchSearchResults = ({ branches, repoName }) => {
  return (
    <div>
      <h4 className="branches-header" data-testid="branches-header">
        <i className="fas fa-code-branch" />
        {`${repoName} branches`}
      </h4>
      <ul>
        {branches
          ? branches.map(branch => <li key={branch.name}>{branch.name}</li>)
          : "No branches available."}
      </ul>
    </div>
  );
};

BranchSearchResults.propTypes = {
  branches: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired
};

export default BranchSearchResults;
