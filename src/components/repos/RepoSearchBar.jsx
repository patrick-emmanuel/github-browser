import React from "react";
import PropTypes from "prop-types";

const RepoSearchBar = ({ handleSubmit, name, handleNameChange }) => (
  <form className="search" onSubmit={handleSubmit}>
    <div className="input-group">
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
    <button>Search</button>
  </form>
);

RepoSearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired
};

export default RepoSearchBar;
