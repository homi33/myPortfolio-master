import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItem = (to, icon, text) => (
    <li>
      <Link to={to} spy={true} smooth={true} duration={100} offset={-100}>
        {icon} {text}
      </Link>
    </li>
  );

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header dropdown">
        <GiHamburgerMenu
          size={25}
          onClick={handleClick}
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu">
          {menuItem("home", <FcHome size={25} />, "Home")}
          {menuItem("about", <FcNightPortrait size={25} />, "About")}
          {menuItem(
            "workexperience",
            <FcFactory size={25} />,
            "Work Experience"
          )}
          {menuItem(
            "techstack",
            <MdBiotech size={25} color="orange" />,
            "Tech Stack"
          )}
          {menuItem(
            "education",
            <MdCastForEducation size={25} color="yellow" />,
            "Education"
          )}
          {menuItem("project", <FcTodoList size={25} />, "Projects")}
          {menuItem("contactsection", <FcContacts size={25} />, "Contact")}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobileView;
