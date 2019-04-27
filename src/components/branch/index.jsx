import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "../../constants";
import BranchSearchResults from "./BranchSearchResults";

const UserBranches = ({ repoName, userName }) => {
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBranches = async () => {
      setLoading(true);
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
    render = "Loading...";
  } else if (!loading && !error && branches.length > 0) {
    render = <BranchSearchResults branches={branches} />;
  } else if (error) {
    render = error;
  } else {
    render = null;
  }
  return (
    <section>
      <div>
        <h4 className="branches-header">{`${repoName} branches`}</h4>
        {render}
      </div>
    </section>
  );
};

UserBranches.propTypes = {
  repoName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default UserBranches;
