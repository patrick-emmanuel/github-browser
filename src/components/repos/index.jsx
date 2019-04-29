import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoSearchBar from "./RepoSearchBar";
import { BASE_URL } from "../../constants";
import { useDebounce } from "../../utils/customHooks";
import RepoSearchResults from "./RepoSearchResults";
import Loader from "../Loader";
import Logo from "./Logo";
import Error from "../Error";

const UserRepo = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);

  const debouncedName = useDebounce(name, 1000);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  useEffect(() => {
    const getRepos = async () => {
      if (debouncedName) {
        setLoading(true);
        setError("");
        try {
          const { data } = await axios.get(
            `${BASE_URL}/users/${debouncedName}/repos`
          );
          setRepos(data);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
        setLoading(false);
      }
    };
    getRepos();
  }, [debouncedName]);

  let render;
  if (loading) {
    render = <Loader />;
  } else if (!loading && !error && repos.length > 0) {
    render = <RepoSearchResults repos={repos} name={debouncedName} />;
  } else if (error) {
    render = <Error error={error} />;
  } else {
    render = null;
  }
  return (
    <section className="repos">
      <Logo />
      <RepoSearchBar
        name={name}
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
      />
      <div className="repo-results">{render}</div>
    </section>
  );
};

export default UserRepo;
