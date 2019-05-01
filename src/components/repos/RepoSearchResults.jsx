import React, { useEffect } from "react";
import { BASE_URL } from "../../constants";
import Loader from "../Loader";
import PropTypes from "prop-types";
import UserRepository from "./UserRepository";
import { useDataApi } from "../../utils/customHooks";
import Error from "../Error";

const RepoSearchResults = ({ match }) => {
  const { isLoading, error, data, fetchData } = useDataApi("", null);
  const { username } = match.params;

  useEffect(() => {
    if (username) {
      fetchData(`${BASE_URL}/users/${username}/repos`);
    }
  }, [username, fetchData]);

  let render;
  if (isLoading) {
    render = <Loader />;
  } else if (!isLoading && !error && data) {
    render = username ? (
      <UserRepository username={username} repos={data} />
    ) : null;
  } else if (error) {
    render = <Error error={error} />;
  } else {
    render = null;
  }
  return <div className="repo-results">{render}</div>;
};

RepoSearchResults.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired
};

export default RepoSearchResults;
