import React from "react";
import "./SkillsPage.css";
import "../SkillsCard/SkillsCard";
import SkillsCard from "../SkillsCard/SkillsCard";
import PortfolioData from "../../../PortfolioData";

const SkillsPage = () => {
  const skills = PortfolioData.skills;
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="inner">
          <div className="skills-title">
            <span className="green">03. </span>Skills
          </div>
          <div className="skills-subtitle">
            These metrics will vary depending on whom you ask
          </div>
          <div className="skills-card-container">
            {skills.map((skill, index) => {
              return (
                <SkillsCard
                  skill={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon + " skill-icon"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
