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
            <span className="green">03. </span>Skills
          </div>
          <div className="skills-subtitle">
            These metrics will vary depending on whom you ask
          </div>
          <div className="skills-card-container">
            <SkillsCard percentage="60" icon="fab fa-html5 tre" skill="HTML" />
            <SkillsCard
              percentage="60"
              icon="fab fa-python tre"
              skill="Python"
            />

            <SkillsCard
              percentage="65"
              icon="fab fa-js-square tre"
              skill="JS"
            />
            <SkillsCard percentage="75" icon="fab fa-react tre" skill="React" />
            <SkillsCard
              percentage="60"
              icon="fas fa-database tre"
              skill="MySQL"
            />
            <SkillsCard
              percentage="65"
              icon="devicon-typescript-plain tre"
              skill="Typescript"
            />
            <SkillsCard
              percentage="60"
              icon="devicon-nodejs-plain tre"
              skill="NodeJS"
            />
            <SkillsCard
              percentage="40"
              icon="devicon-flutter-plain tre"
              skill="Flutter"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
