import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const techData = [
    "Web Development",
    "Responsive UI",
    "HTML/CSS",
    "Git",
    "TypeScript",
    "Bootstrap",
    "Javascript",
    "React-Js",
    "Material UI",
  ];

  const techColors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {techData.slice(0, showMoreTechStack).map((tech, index) => (
          <Fade right key={index}>
            <div className={`col-xl-4 col-lg-4 col-md-6 col-sm-12`}>
              <div
                className={`tech-content ${
                  index === 0 ? "tech-content-marked" : ""
                }`}
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: techColors[index] }}
                >
                  {index + 1}
                </span>
                <p>{tech}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= techData.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
