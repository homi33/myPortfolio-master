import React from "react";
import "./About.css";
import profilepic from "../../Image/h.JPG";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={profilepic} alt="Profile" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                Detail-oriented Front-end developer with 2 years of experience
                in designing, developing, and deploying enterprise-level
                applications.
                <br /> Inspired to take on new challenges, acquire new skills,
                and explore new possibilities.
                <br /> Seeking an opportunity to utilize my skills and continue
                learning in my field of work.
                <br /> I'm enthusiastic about my work and thrive under
                deadlines.
                <br /> I'm a passionate individual with excellent interpersonal
                and communication skills.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
