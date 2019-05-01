import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "../../constants";
import BranchSearchResults from "./BranchSearchResults";
import { useDataApi } from "../../utils/customHooks";

const Branch = ({ repoName, username }) => {
  const { isLoading, error, data, fetchData } = useDataApi("", null);

  useEffect(() => {
    fetchData(`${BASE_URL}/repos/${username}/${repoName}/branches`)
  }, [username, repoName, fetchData]);

  let render;
  if (isLoading) {
    render = <p>Loading...</p>;
  } else if (!isLoading && !error && data) {
    render = <BranchSearchResults branches={data} repoName={repoName} />;
  } else if (error) {
    render = error;
  } else {
    render = null;
  }
  return <section>{render}</section>;
};

Branch.propTypes = {
  repoName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Branch;
