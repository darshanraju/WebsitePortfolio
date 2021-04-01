import React from "react";
import "./SkillsPage.css";
import "../SkillsCard/SkillsCard";
import SkillsCard from "../SkillsCard/SkillsCard";

const SkillsPage = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="inner">
          <div className="skills-title">
            <span className="green">3.0 </span>Skills
          </div>
          <div className="skills-subtitle">
            These metrics will vary depending on whom you ask
          </div>
          <div className="skills-card-container">
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
            <SkillsCard />
          </div>
          {/* <div className="fragment-image">
            <span>&lt;\&gt;</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
