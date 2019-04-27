import React, { useState } from "react";
import axios from "axios";
import RepoSearchBar from "./RepoSearchBar";
import { BASE_URL} from "../../constants";
import RepoSearchResults from "./RepoSearchResults";

const UserRepo = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    getRepos();
  };

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const getRepos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/users/${name}/repos`);
      setRepos(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  let render;
  if (loading) {
    render = "Loading...";
  } else if (!loading && !error && repos.length > 0) {
    render = <RepoSearchResults repos={repos} name={name} />;
  } else if (error) {
    render = error;
  } else {
    render = null;
  }
  return (
    <section className="repos">
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
