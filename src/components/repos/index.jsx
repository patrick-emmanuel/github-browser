import React, { useEffect, useState } from "react";
import RepoSearchBar from "./RepoSearchBar";
import { BASE_URL } from "../../constants";
import { useDebounce, useDataApi } from "../../utils/customHooks";
import RepoSearchResults from "./RepoSearchResults";
import Loader from "../Loader";
import Logo from "./Logo";
import Error from "../Error";

const UserRepo = () => {
  const [username, setUsername] = useState("");
  const debouncedName = useDebounce(username, 1000);
  const { isLoading, error, data, fetchData } = useDataApi("", null);

  const handleNameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (debouncedName) {
      fetchData(`${BASE_URL}/users/${debouncedName}/repos`);
    }
  }, [debouncedName]);

  let render;
  if (isLoading) {
    render = <Loader className="loader-lg" />;
  } else if (!isLoading && !error && data) {
    render = <RepoSearchResults repos={data} username={debouncedName} />;
  } else if (error) {
    render = <Error error={error} />;
  } else {
    render = null;
  }
  return (
    <section className="repos">
      <Logo />
      <RepoSearchBar username={username} handleNameChange={handleNameChange} />
      <div className="repo-results">{render}</div>
    </section>
  );
};

export default UserRepo;
