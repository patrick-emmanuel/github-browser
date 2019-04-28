import React from "react";
import { useSpring, animated } from "react-spring";
import RepoBranch from "../branch";
import Accordion from "../Accordion";
import PropTypes from "prop-types";

const RepoSearchResults = ({ repos, name }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <h2>{name} repositories</h2>
      <Accordion>
        {repos.map(repo => (
          <div key={repo.name} label={repo.name}>
            <RepoBranch repoName={repo.name} userName={name} />
          </div>
        ))}
      </Accordion>
    </animated.div>
  );
};

RepoSearchResults.propTypes = {
  repos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default RepoSearchResults;
