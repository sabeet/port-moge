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
              Hi, My name is Sabeet Chowdhury and I am a Software Developer. I
              graduated with a Bachelor's from Queens College in December 2020
              while majoring in Computer Science. Courses I took relevant to my
              major includes but are not limited to: Software Engineering,
              Genetic Algorithms, Databases, Operating Systems, Principals of
              Programming Languages, Internet Web Technologies, Data Structures,
              OOPs in Java, OOPs in C++, etc. Slightly prior to my graduation, I
              recieved an internship oppurtunity with Workschool.co where I
              interned there as a React developer. After my internship ended, I
              applied to Cognixia's Jump Program. The Jump program provided me
              training for our ever changing industry to become a Full Stack
              Software Developer. Within a six week period, I learned core Java
              fundmentals aswell as advance functions, HTML, CSS, JavaScript,
              React, SQL, Java Spring Boot, and AWS. I am currently looking for
              a challenging work environment in a collaborative setting. As I
              find myself progressing through the challenges that come forth, I
              gain the experience required to one day become an industry leader.
              I am always open to learning new technologies as I'm always
              excited for advancements in software development. And finally, I
              would like to mention that I code for fun too! Aswell as coding
              for good. Skills: Languages: Java, C++, JavaScript, HTML, CSS, SQL
              Frameworks: Spring Boot, React, Express, Node, Bootstrap Tools:
              Git, Linux, Windows, Unix, Docker Infrastructures: AWS
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
