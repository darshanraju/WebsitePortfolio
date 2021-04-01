import React from "react";
import "./SkillsCard.css";
import typescript from "../../../images/typescript.png";

const SkillsCard = () => {
  return (
    <div className="skill-card-container">
      <div className="skill-image-container">
        <img className="logo" src={typescript} alt="" />
      </div>
      <div className="skill-name">TypeScript</div>
      <div className="skill-percentage-bar-container">
        <div className="skill-percentage-bar-completed"></div>
      </div>
      <div className="skill-percentage-number">50%</div>
    </div>
  );
};

export default SkillsCard;
