import React from "react";
import PropTypes from "prop-types";

const RepoSearchBar = ({ handleSubmit, name, handleNameChange }) => (
  <form className="search" onSubmit={handleSubmit} data-testid="search-form">
    <div className="input-group">
      <input
        type="text"
        name="username"
        aria-label="username"
        placeholder="Username"
        value={name}
        onChange={handleNameChange}
      />
      <i className="fas fa-search fa-lg" />
    </div>
  </form>
);

RepoSearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired
};

export default RepoSearchBar;
