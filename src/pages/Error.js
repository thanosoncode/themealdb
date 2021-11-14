import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Nothing to see here</h3>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Error;
