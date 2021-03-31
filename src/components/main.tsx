import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProjectsPage from "./Projects/ProjectsPage/ProjectsPage";
import WorkPage from "./Work/WorkPage/WorkPage";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <WorkPage />
      <ProjectsPage />
      <Footer />
    </>
  );
};

export default Main;
