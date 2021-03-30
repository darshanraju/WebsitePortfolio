import React from "react";
import "./WorkPage.css";
import WordCard from "../WorkCard/WorkCard";

const WorkPage = () => {
  return (
    <section className="exp-container" id="experience">
      <div className="exp-title">
        <p>Experience</p>
      </div>
      <div className="exp-card-container">
        <WordCard
          role="Software Development Engineering Intern"
          duration="Nov 2020 - Feb 2021"
          company="Amazon Web Services"
          responsibilities={[
            "Front end engineer, using React with typescript to develop and maintain features in an AWS service.",
            "Integrating S3 into a new AWS Incident Management service, Enabling customers to upload files to incidents, which allows for the documenting ofprogression and resolution or incidents.",
          ]}
          key={1}
        />
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
      </div>
    </section>
  );
};

export default WorkPage;
