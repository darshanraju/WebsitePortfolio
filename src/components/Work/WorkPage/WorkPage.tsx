import React from "react";
import "./WorkPage.css";
import WordCard from "../WorkCard/WorkCard";
import PortfolioData from "../../../PortfolioData";
const Fade = require("react-reveal/Fade");

const WorkPage: React.FC = () => {
  const experiences = PortfolioData.experience;

  function importAll(r: any) {
    return r.keys().map(r);
  }

  const logos = importAll(
    require.context("../../../images/CompanyLogos", false)
  );

  return (
    <section className="exp-container" id="experience">
      <div className="exp-title">
        <span className="green">01. </span>Experience
      </div>
      <div className="exp-card-container">
        {experiences.map((exp, index) => {
          const companyMatcher = new RegExp(exp.iconName, "i");
          const logoV2 = logos.find((logo: any) => {
            return logo.default.match(companyMatcher);
          });
          return (
            <div key={index} className="card-image-container">
              <WordCard
                role={exp.role}
                duration={exp.duraction}
                company={exp.company}
                responsibilities={exp.responsibilities}
                key={index}
              />
              <Fade duration={500} up>
                <img className="company-logo" src={logoV2.default} alt="" />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkPage;
