import { Link } from "react-router-dom";
import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="parent-3">
        <div className="left-3">
          <div className="image-3">
            <p>
              Contact
              <hr />
              Sabeet.a.chow90s@gmail.com
              <br />
              LinkedIn
              <br />
              Github
              <br />
              Instagram
            </p>
          </div>

          <div className="group-3">
            <div className="item-3">
              {" "}
              <Link to="/">Home</Link>{" "}
            </div>
            <div className="item-3">
              {" "}
              <Link to="/about">About</Link>
            </div>
            <div className="item-3">
              {" "}
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>

        <div className="side-3">
          <span>Contact</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
