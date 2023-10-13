import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const projectData = [
  {
    name: "Profile",
    des: "Simple Frontend web page. Role: Developer.",
    projectlink: "https://homi33.github.io/Homi-sWcesite//",
    techused: ["HTML", "CSS"],
  },
  {
    name: "Smooth-React",
    des: "A crypto/forex-based web application with user-friendly design.",
    projectlink: "https://forex-crypto-webpage.netlify.app/",
    techused: ["HTML/CSS", "JavaScript", "React"],
  },
  {
    name: "Quiz App",
    des: "A dynamic quiz app where users can select difficulty level, topics, and number of questions.",
    projectlink: "https://homi-quizz-app.netlify.app/",
    techused: ["HTML/CSS", "React", "JavaScript"],
  },
  {
    name: "Cocktail Drinks-Menu",
    des: "An application for selecting and reading drink descriptions.",
    projectlink: "https://cocktail-drinks-menu.netlify.app/",
    techused: ["HTML/CSS", "React", "JavaScript"],
  },
  {
    name: "TinDogs",
    des: "Simple Frontend web page. Role: Developer.",
    projectlink: "https://homi33.github.io/TindDogs//",
    techused: ["HTML", "CSS", "Bootstrap"],
  },
  {
    name: "Guess the Correct Number",
    des: "A number-guessing game with difficulty levels and limited attempts.",
    projectlink: "https://homi33.github.io/GuessGameHomi.github.io/",
    techused: ["HTML", "CSS", "Bootstrap"],
  },
];

const Project = () => {
  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {projectData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
