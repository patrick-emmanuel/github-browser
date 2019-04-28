import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

const BranchSearchResults = ({ branches, repoName }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <h4
        className="branches-header"
        data-testid="branches-header"
      >{`${repoName} branches`}</h4>
      <ul>
        {branches.map(branch => (
          <li key={branch.name}>{branch.name}</li>
        ))}
      </ul>
    </animated.div>
  );
};

BranchSearchResults.propTypes = {
  branches: PropTypes.array.isRequired
};

export default BranchSearchResults;
