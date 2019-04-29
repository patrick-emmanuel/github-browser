import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { BASE_URL } from "../../constants";
import BranchSearchResults from "./BranchSearchResults";

const UserBranches = ({ repoName, userName }) => {
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState("");
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    const getBranches = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axios.get(
          `${BASE_URL}/repos/${userName}/${repoName}/branches`
        );
        setBranches(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      setLoading(false);
    };
    getBranches();
  }, [repoName, userName]);

  let render;
  if (loading) {
    render = <p>Loading</p>;
  } else if (!loading && !error && branches.length > 0) {
    render = <BranchSearchResults branches={branches} repoName={repoName} />;
  } else if (error) {
    render = error;
  } else {
    render = null;
  }
  return <animated.section style={props}>{render}</animated.section>;
};

UserBranches.propTypes = {
  repoName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default UserBranches;
