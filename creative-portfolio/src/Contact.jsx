import { Link } from "react-router-dom";
import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="parent-contact">
        <div className="left-contact">
            <span>Contact</span>
        </div>
        <div className="right-contact">
            <div className="right-top">
                <div className="top-item"><Link to="/about">About</Link></div>
                <div className="top-item"><Link to="/">Home</Link></div>
                <div className="top-item"><Link to="/portfolio">Portfolio</Link></div>
            </div>
            <div className="right-bottom">
                <div className="grid-bottom">
                    <div className="grid-item">circle</div>
                    <div className="grid-item">details</div>
                    <div className="grid-item">circle</div>
                    <div className="grid-item"><a href="https://www.linkedin.com/in/sabeet/">LinkedIn</a></div>
                    <div className="grid-item"><a href="https://github.com/sabeet">Github</a></div>
                    <div className="grid-item">circle</div>
                    <div className="grid-item">circle</div>
                    <div className="grid-item">circle</div>
                    <div className="grid-item">circle</div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
