import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "B.M.C.E.T (Surat)",
      degree: "Bachelor of Engineering - Mechanical Engineering ",
      year: "2014 - 2018",
    },
    {
      name: "Kaushal Vidhyabhawan (Surat)",
      degree: "Information Science and Engineering",
      year: "2012 - 2014",
    },
    {
      name: "P.P.H.S (Mumbai)",
      degree: "Matriculation (Class X) ",
      year: "2011 - 2012",
    },
  ];

  const colors = ["#001CCE", "#4B088A", "#FE2EF7", "#FF1042"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "yellow" }}
              >
                {item.degree}
              </h5>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
