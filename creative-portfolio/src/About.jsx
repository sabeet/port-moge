import "./About.css";

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="parent-2">
        <div className="left-2">
          <div className="image-2">
            <p>
              <h1> Sabeet A. Chowdhury</h1>

              <p></p>
            </p>
          </div>

          <div className="group-2">
            <div className="item-2">
              <Link to="/">Home</Link>
            </div>
            <div className="item-2">
              
              <Link to="/contact">Contact</Link>
            </div>
            <div className="item-2">
              
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>

        <div className="side-2">
          <span>About</span>
        </div>
      </div>
    </>
  );
};

export default About;
