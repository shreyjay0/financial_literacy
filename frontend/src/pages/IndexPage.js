import React from "react";
import "../style/IndexPage.css";
import trophy from '../assets/trophy.png';
import notebook from '../assets/notebook.png';
import speaker from '../assets/speaker.png';

const IndexPage = () => {
  return (
    <div className="index">
      <div className="header">
        <h3>Learn how you can be</h3>
        <h1>Financially Independent</h1>
      </div>
      <div class="wrap">
        <div className="search" >
          <input className = "searchTerm" type = "text"/>
        </div>
        <button className="searchButton" type="submit">Search!</button>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-header">
            <img src={trophy} alt="trophy" />
          </div>
          <div class="card-body">
            <h4>
              Challenges
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={notebook} alt="notebook" />
          </div>
          <div class="card-body">
            <h4>
              Quick lessons
            </h4>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={speaker} alt="speaker" />
          </div>
          <div class="card-body">
            <h4>
              Workshops
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
