import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./Homi_Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home responsive-home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content  responsive-home">
        <Fade right>
          <h1>Hi I'm Homi Gadhethariya</h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Web Developer"],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>
            <div className="get-resume-button">
              <a href={MyCv} download="Homi_Resume.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
