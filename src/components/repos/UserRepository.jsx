import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import RepoBranch from "../branch";
import Accordion from "./Accordion";

const UserRepository = ({ username, repos }) => {
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

UserRepository.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

export default UserRepository;
