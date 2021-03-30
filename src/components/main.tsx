import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProjectsPage from "./Projects/ProjectsPage";
import WorkPage from "./Work/WorkPage/WorkPage";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <WorkPage />
      <ProjectsPage />
    </>
  );
};

export default Main;
