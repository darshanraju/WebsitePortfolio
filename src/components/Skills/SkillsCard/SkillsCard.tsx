import "./SkillsCard.css";

const Fade = require("react-reveal/Fade");

const SkillsCard = ({ percentage, icon, skill }: SkillCardData) => {
  const completedWidth = `${percentage}%`;

  return (
    <Fade duration={800} up>
      <div className="skill-card-container">
        <div className="skill-image-container">
          <i className={icon}></i>
        </div>
        <div className="skill-name">{skill}</div>
        <div className="skill-percentage-bar-container">
          <div
            className="skill-percentage-bar-completed"
            style={{ width: completedWidth }}
          ></div>
        </div>
        <div className="skill-percentage-number">{percentage}%</div>
      </div>
    </Fade>
  );
};

interface SkillCardData {
  percentage: string;
  icon: string;
  skill: string;
}

export default SkillsCard;
