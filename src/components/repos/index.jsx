import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import RepoSearchBar from "./RepoSearchBar";
import RepoSearchResults from "./RepoSearchResults";
import { useDebounce } from "../../utils/customHooks";
import Logo from "./Logo";

const Repo = ({ history }) => {
  const [username, setUsername] = useState("");
  const debouncedName = useDebounce(username, 600);

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

Repo.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};

export default Repo;
