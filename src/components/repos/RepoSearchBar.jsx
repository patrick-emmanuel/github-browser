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
        autoFocus
        value={name}
        onChange={handleNameChange}
      />
    </div>
    <button>
      Find User <i className="fas fa-search" />
    </button>
  </form>
);

RepoSearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired
};

export default RepoSearchBar;
