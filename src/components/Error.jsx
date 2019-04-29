import React from "react";

const Error = ({ error }) => {
  let render;
  if (error.response.status === 404) {
    render = <p>404. User you searched for does not exist on GitHub.</p>;
  } else {
    render = error.message;
  }
  return <div className="error">{render}</div>;
};

export default Error;
