import React, { useState, createContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <NavbarMobileView changeTheme={toggleTheme} theme={theme} />
        <Sidebar changeTheme={toggleTheme} theme={theme} />
        <div className="responsive-container">
          <About />
          <WorkExperience />
          <TechStack />
          <Education />
          <Project />
          <Contact />
        </div>
      </div>

      <ScrollToTop
        smooth={true}
        top={20}
        color="white"
        height={20}
        width={20}
        style={{
          borderRadius: "90px",
          backgroundColor: "#38004c",
        }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
