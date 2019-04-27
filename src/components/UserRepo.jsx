import React, { useState } from "react";
import axios from "axios";
import UserBranches from "./UserBranches";
import Accordion from "./Accordion";

const UserRepo = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
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
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} />
        <button>Search</button>
      </form>
      <div>
        {loading ? "Loading..." : ""}
        {repos ? (
          <Accordion>
            {repos.map(repo => (
              <div id={repo.name} label={repo.name}>
                <UserBranches repoName={repo.name} userName={name} />
              </div>
            ))}
          </Accordion>
        ) : (
          "No repos"
        )}
      </div>
    </section>
  );
};

export default UserRepo;
