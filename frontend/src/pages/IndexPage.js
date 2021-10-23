import React from "react";
import Search from "../components/Search";
import "../style/IndexPage.css";

const IndexPage = () => {
  return (
    <div className="index">
      <div className="header">
        <h3>Learn how you can be</h3>
        <h1>Financially Independent</h1>
      </div>
      <Search sx={{ margin: "0 auto" }} />
    </div>
  );
};

export default IndexPage;
