import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/man.png";
import { Link } from "react-scroll";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const SidebarList = ({ expandSidebar }) => {
  const commonLinkProps = {
    spy: true,
    smooth: true,
    duration: 100,
    offset: -100,
  };

  const renderNavItem = (to, text, icon) => (
    <li className="nav-item">
      <Link to={to} {...commonLinkProps}>
        {icon} {text}
      </Link>
    </li>
  );

  const renderIconItem = (to, icon) => (
    <li className="nav-item">
      <Link to={to} {...commonLinkProps}>
        {icon}
      </Link>
    </li>
  );

  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile" />
          </div>

          <ul>
            {renderNavItem("home", "Home", <FcHome size={25} />)}
            {renderNavItem("about", "About", <FcNightPortrait size={25} />)}
            {renderNavItem(
              "workexperience",
              "Work Experience",
              <FcFactory size={25} />
            )}
            {renderNavItem(
              "techstack",
              "Tech Stack",
              <MdBiotech size={25} color="orange" />
            )}
            {renderNavItem(
              "education",
              "Education",
              <MdCastForEducation size={25} color="yellow" />
            )}
            {renderNavItem("project", "Projects", <FcTodoList size={25} />)}
            {renderNavItem(
              "contactsection",
              "Contact",
              <FcContacts size={25} />
            )}
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            {renderIconItem("home", <FcHome size={25} />)}
            {renderIconItem("about", <FcNightPortrait size={25} />)}
            {renderIconItem("workexperience", <FcFactory size={25} />)}
            {renderIconItem(
              "techstack",
              <MdBiotech size={25} color="orange" />
            )}
            {renderIconItem(
              "education",
              <MdCastForEducation size={25} color="yellow" />
            )}
            {renderIconItem("project", <FcTodoList size={25} />)}
            {renderIconItem("testimonial", <FcSalesPerformance size={25} />)}
            {renderIconItem("contactsection", <FcContacts size={25} />)}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
