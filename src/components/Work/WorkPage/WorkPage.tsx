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
        {/* <div className="card-image-co"> */}
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
        {/* </div> */}

        {/* <div>
          <Fade duration={500} right>
            <div className="aws-image" />
          </Fade>
          <WordCard
            role="Software Development Engineering Intern"
            duration="Nov 2020 - Feb 2021"
            company="Amazon Web Services"
            responsibilities={[
              "Used Typescript with React to develop and maintain features in an AWS service.",
              "Integrated S3 into a new AWS Incident Management service, enabling customers to upload files to incidents, which allows for the documenting ofprogression and resolution or incidents.",
            ]}
            key={1}
          />
        </div>
        <div>
          <Fade duration={500} left>
            <div className="serviceNow-image"></div>
          </Fade>

          <WordCard
            role="Site Reliability Engineering Intern"
            duration="Nov 2020 - Feb 2021"
            company="ServiceNow"
            responsibilities={[
              "Maintained customer instances by \
monitoring availability and latency.",
              "Utilise MySQL, MariaDB and the InnoDB engine to resolve database monitoring\
          alerts.",
              "Operated in CentOS to analyse OS monitoring alerts.",
              "Used automations runbooks to provide minimal mean time to resolutions\
          during outages.",
            ]}
            key={2}
          />
        </div> */}
      </div>
    </section>
  );
};

export default WorkPage;
