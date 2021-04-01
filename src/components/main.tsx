import React from "react";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProjectsPage from "./Projects/ProjectsPage/ProjectsPage";
import SkillsPage from "./Skills/SkillsPage/SkillsPage";
import WorkPage from "./Work/WorkPage/WorkPage";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <WorkPage />
      <ProjectsPage />
      <SkillsPage />
      <Contact />
    </>
  );
};

export default Main;
