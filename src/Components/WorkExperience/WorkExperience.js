import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const workData = [
    {
      companyname: "MPOWER Financing",
      position: "Associate Software Engineer",
      des: "Collaborate with cross-functional teams to identify and prioritize features and requirements. Frontend development using Remix on top of ReactJs with TypeScript, developing reusable frontend components. Solved 300+ errors on SonarQube (code analysis) tool and managed the quality of the source code throughout the development process. Effective usage of Jira for issue tracking and project management. Experience in managing project tasks and progress using Trello boards.",
      year: "01 Jan, 2023 - Present",
      techskills: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Mantine",
        "TypeScript",
        "Remix",
      ],
    },
    {
      companyname: "Newton School",
      position: "Junior Software Engineer",
      des: "Web development along with problem-solving. Pursued ongoing learning and professional development opportunities, including online courses and workshops. Collaborated with other developers to update the website and create new features. Collaborated with senior developers to design and implement new software features. Debugged and resolved software defects to improve application stability.",
      year: "10 Jan, 2022 - 21 Dec, 2022",
      techskills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React JS",
        "Material UI",
      ],
    },
    {
      companyname: "Unibite Foods Pvt Ltd.",
      position: "Production Planning & Junior Manager",
      des: "Managing Inventory with the team. Production planning based on clients' requirements. In charge of receiving shipments and inspecting the product quality.",
      year: "07 Jul, 2021 - 10 Jan, 2022",
      techskills: ["Product Quality Management", "Production Planning"],
    },
    {
      companyname: "Synnova Gears & Transmissions Pvt Ltd.",
      position: "Maintenance Engineer",
      des: "Machine Reconditioning. Machine Retro-fitting.",
      year: "03 Mar, 2020 - 05 Jul, 2021",
      techskills: ["Maintenance Engineer"],
    },
    {
      companyname: "Pickwell Engineering Pvt Ltd.",
      position: "Production Supervisor",
      des: "Supervise Production of Jacquard Machine. Mechanical Drawings for piece parts of Jacquard Machine.",
      year: "01 Jan, 2019 - 01 Mar, 2020",
      techskills: ["Production Supervisor"],
    },
  ];

  const timelineColors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {workData.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: timelineColors[index],
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: timelineColors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tech, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tech}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
