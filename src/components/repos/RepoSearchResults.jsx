import React from "react";
import { useSpring, animated } from "react-spring";
import RepoBranch from "../branch";
import Accordion from "./Accordion";
import PropTypes from "prop-types";

const RepoSearchResults = ({ repos, username }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className="accordion">
        <h2>{username} repositories</h2>
        {repos.length > 0 ? (
          <Accordion>
            {repos.map(repo => (
              <div
                key={repo.name}
                label={repo.name}
                description={repo.description}
                starsCount={repo.stargazers_count}
                privateRepo={repo.private}
              >
                <RepoBranch repoName={repo.name} username={username} />
              </div>
            ))}
          </Accordion>
        ) : (
          "This user has no repositories"
        )}
      </div>
    </animated.div>
  );
};

RepoSearchResults.propTypes = {
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

export default RepoSearchResults;
