import React from "react";
import "../style/IndexPage.css";


const IndexPage = () => {
  return (
    <div className="index">
      <div className="header">
        <h3>Learn how you can be</h3>
        <h1>Financially Independent</h1>
      </div>
      <div className="search-box">
        <input
            type="text"
            id="searchBar"
            placeholder="Search"
        />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default IndexPage;
