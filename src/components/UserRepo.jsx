import React, { useState } from "react";
import axios from "axios";
import UserBranches from "./UserBranches";
import Accordion from "./Accordion";

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
      const { data } = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      setRepos(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <section className="repos">
      <form className="search" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <button>Search</button>
      </form>
      <div className="repo-results">
        {loading ? (
          "Loading..."
        ) : !loading && !error && repos.length > 0 ? (
          <Accordion>
            {repos.map(repo => (
              <div key={repo.name} label={repo.name}>
                <UserBranches repoName={repo.name} userName={name} />
              </div>
            ))}
          </Accordion>
        ) : error ? (
          <p>{error}</p>
        ) : null}
      </div>
    </section>
  );
};

export default UserRepo;
