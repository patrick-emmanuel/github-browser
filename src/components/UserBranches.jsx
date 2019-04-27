import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBranches = ({ repoName, userName }) => {
  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const getBranches = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.github.com/repos/${userName}/${repoName}/branches`
        );
        setBranches(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    };
    getBranches();
  }, [repoName, userName]);

  return (
    <section>
      <div>
        {loading ? "Loading..." : ""}
        {branches
          ? branches.map(branch => <div id={branch.name}>{branch.name}</div>)
          : "No branches"}
      </div>
    </section>
  );
};

export default UserBranches;
