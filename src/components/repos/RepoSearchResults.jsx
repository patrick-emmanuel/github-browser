import React from "react";
import RepoBranch from "../branch";
import Accordion from "../Accordion";
import PropTypes from "prop-types";

const RepoSearchResults = ({ repos, name }) => (
  <Accordion>
    {repos.map(repo => (
      <div key={repo.name} label={repo.name}>
        <RepoBranch repoName={repo.name} userName={name} />
      </div>
    ))}
  </Accordion>
);

RepoSearchResults.propTypes = {
  repos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default RepoSearchResults;
