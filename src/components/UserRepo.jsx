import React, { useState } from "react";
import axios from "axios";

const UserRepo = () => {
  const [name, setName] = useState("");
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
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} />
        <submit>Search</submit>
      </form>
      <div>
        {repos ? repos.map(repo => <div>{repo.name}</div>) : "No repos"}
      </div>
    </section>
  );
};

export default UserRepo;
