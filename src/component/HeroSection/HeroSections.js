import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/bg.png";
import "./HeroSections.css";
import "../Button/Button.css";

function HeroSections() {
  
  return (
    <>
      <div className="hero-sections">
        <img src={bg} alt="" />
        <div className="hero-container">
          <div className="header">
            <h1>I'll be by (your) side</h1>
            <p>
              Read and share new perspectives on just about any topic
              .Everyone's welcome
            </p>
              <div className="btn">
                <Link to="/get-start" className="Button-header">
                  Get Start
                </Link>
              </div>   
          </div>
          <div className="icon"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSections;
