import React from "react";
import "./SkillsPage.css";
import "../SkillsCard/SkillsCard";
import SkillsCard from "../SkillsCard/SkillsCard";
import PortfolioData from "../../../PortfolioData";

const SkillsPage = () => {
  const skills = PortfolioData.skills;
  return (
    <section id="skills">
      <div className="skills-container" data-testid="skills-container">
        <div className="inner">
          <div className="skills-title">
            <span className="green">03. </span>Skills
          </div>
          <div className="skills-subtitle" data-testid="skills-subtitle">
            {PortfolioData.skills.skillsPageSubtitle}
          </div>
          <div
            className="skills-card-container"
            data-testid="skills-card-container"
          >
            {skills.skills.map((skill, index) => {
              return (
                <SkillsCard
                  key={index}
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
