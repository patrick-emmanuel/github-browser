import React from "react";
import PropTypes from "prop-types";

const RepoSearchBar = ({ username, handleNameChange }) => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className="search" data-testid="search-form" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="username"
          aria-label="username"
          placeholder="Find a user on Github"
          value={username}
          onChange={handleNameChange}
        />
        <i className="fas fa-search fa-lg" />
      </div>
    </form>
  );
};

RepoSearchBar.propTypes = {
  username: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired
};

export default RepoSearchBar;
