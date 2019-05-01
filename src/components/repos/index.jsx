import React, { useEffect, useState } from "react";
import RepoSearchBar from "./RepoSearchBar";
import { Route } from "react-router-dom";
import RepoSearchResults from "./RepoSearchResults";
import { useDebounce } from "../../utils/customHooks";
import Logo from "./Logo";

const Repo = ({ history }) => {
  const [username, setUsername] = useState("");
  const debouncedName = useDebounce(username, 1000);

  const handleNameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (debouncedName) {
      history.push(`/${debouncedName}`);
    }
  }, [debouncedName, history]);

  return (
    <section className="repos">
      <Logo />
      <RepoSearchBar username={username} handleNameChange={handleNameChange} />
      <Route path="/:username" component={RepoSearchResults} />
    </section>
  );
};

export default Repo;
