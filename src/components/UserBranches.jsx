import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBranches = ({ repoName, userName }) => {
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBranches = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.github.com/repos/${userName}/${repoName}/branches`
        );
        setBranches(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      setLoading(false);
    };
    getBranches();
  }, [repoName, userName]);

  return (
    <section>
      <div>
        <h4 className="branches-header">{`${repoName} branches`}</h4>
        {loading ? (
          "Loading..."
        ) : !loading && !error && branches ? (
          branches.map(branch => <div key={branch.name}>{branch.name}</div>)
        ) : error ? (
          <p>error</p>
        ) : null}
      </div>
    </section>
  );
};

export default UserBranches;
